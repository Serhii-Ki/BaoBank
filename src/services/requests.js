import { useHttp } from "../hooks/http.hook";

const useService = () => {
    const { request } = useHttp();

    const apiBase = 'http://49.13.31.246:9191/';
    const routes = {
        signup: 'signup',
    };

    //Регистрация
    const POST_REG_USER = async (data) => {
        const res = await request(
            `${apiBase}${routes.signup}`,
            'POST',
            JSON.stringify(data),
        );
        return res;
    };

    return { POST_REG_USER };
}

export default useService;