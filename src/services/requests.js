import { useHttp } from "../hooks/http.hook";

const useService = () => {
	const { request, clearError, process, setProcess } = useHttp()

	const apiBase = 'http://49.13.31.246:9191/'
	const token = localStorage.getItem('jwt')
	const routes = {
		signup: 'signup',
		signin: 'signin',
		users: 'users',
		me: 'me',
		transaction: 'transaction',
		notifications: 'notifications',
	}

	//Регистрация
	const POST_REG_USER = async data => {
		const res = await request(
			`${apiBase}${routes.signup}`,
			'POST',
			JSON.stringify(data)
		)
		return res
	}

	//Логин
	const POST_LOGIN_USER = async data => {
		const res = await request(
			`${apiBase}${routes.signin}`,
			'POST',
			JSON.stringify(data)
		)
		return res
	}

	//Получение данных пользователя
	const GET_USER_DATA = async () => {
		const res = await request(`${apiBase}${routes.me}`, 'GET', null, {
			'content-type': 'application/json',
			'x-access-token': token,
		})
		return res
	}

	//Запрос на получения всех юзеров
	const GET_USERS = async () => {
		const res = await request(`${apiBase}${routes.users}`, 'GET', null, {
			'content-type': 'application/json',
			'x-access-token': token,
		})
		return res
	}

	//Запрос на изменение данных (баланса)
	const PUT_CHANGE_DATA = async data => {
		const res = await request(
			`${apiBase}${routes.me}`,
			'PUT',
			JSON.stringify(data),
			{
				'content-type': 'application/json',
				'x-access-token': token,
			}
		)
		return res
	}

	//Запрос на отправку тразакции
	const POST_TRANSACTION = async dataTransaction => {
		dataTransaction.userAvatar = dataTransaction.userAvatar || ''
		dataTransaction.trType = dataTransaction.trType || 'out'

		const currentDate = new Date()
		const day = currentDate.getDate()
		const month = currentDate.getMonth() + 1
		const year = currentDate.getFullYear()
		const hours = currentDate.getHours()
		const minutes = currentDate.getMinutes()

		const pad = num => (num < 10 ? '0' + num : num)

		dataTransaction.trDate = `${pad(day)}.${pad(month)}.${year} ${pad(
			hours
		)}:${pad(minutes)}`

		const res = await request(
			`${apiBase}${routes.transaction}`,
			'POST',
			JSON.stringify(dataTransaction),
			{
				'content-type': 'application/json',
				'x-access-token': token,
			}
		)
		return res;
	}

	//Удаление Notifications
    const DELETE_NOTIFICATIONS = async data => {
        const res = await request(
            `${apiBase}${routes.notifications}`,
            'DELETE',
            null,
            {
                'content-type': 'application/json',
                'x-access-token': token,
            }
        )
        return res;
    }

	return {
		clearError,
		process,
		setProcess,
		POST_REG_USER,
		POST_LOGIN_USER,
		GET_USER_DATA,
		PUT_CHANGE_DATA,
		POST_TRANSACTION,
		GET_USERS,
		DELETE_NOTIFICATIONS,
	}
}

export default useService;