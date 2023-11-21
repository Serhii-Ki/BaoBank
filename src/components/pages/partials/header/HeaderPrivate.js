import { useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUserData } from "../../../../store/actions/actions";
import useService from '../../../../services/requests';

import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import PowerSettingsNewOutlinedIcon from "@mui/icons-material/PowerSettingsNewOutlined";

import "./header.scss";

function HeaderPrivate() {

    const navigate = useNavigate();

    const userData = useSelector(state => state.user.userData);
    const dispatch = useDispatch();

    const { GET_USER_DATA: getUser, setProcess, process } = useService();

    useEffect(() => {
        getMyData();
        // eslint-disable-next-line
    }, [userData.transaction]);

    const getMyData = () => {
        getUser()
            .then((data) => {
                dispatch(getUserData(data));
            })
            .then(() => {
                setProcess('confirmed');
            });
    };

    return (
        <header className="header">
            <div className="header__userdata">
                <div className="header__userdata-avatar"
                    style={{
                        background: `url(${userData.avatar && userData.avatar !== 'any' ? userData.avatar : "https://cdn-icons-png.flaticon.com/512/3607/3607444.png"}) center center/ cover no-repeat`
                    }}
                ></div>
                <p className="header__userdata-name">{userData.username}</p>
            </div>
            <div className="header__icons">
                <NotificationsNoneOutlinedIcon
                    className='header__icon'
                />
                <PowerSettingsNewOutlinedIcon
                    className='header__icon'
                    onClick={() => navigate('/')}
                />
            </div>
        </header>
    );

}

export default HeaderPrivate;
