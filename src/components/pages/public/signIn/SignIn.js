import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";

import useService from '../../../../services/requests';
import PrimaryBtn from '../../../designComponents/PrimaryBtn';

import './signIn.scss';

function SignIn() {
    const styleBtn = {
        width: "300px"
    };

    let userData;

    const { POST_LOGIN_USER: login } = useService();

    const navigate = useNavigate();


    const {
        register,
        handleSubmit,
        formState: { errors },
        reset
    } = useForm();

    const submittedData = (data) => {
        console.log('OK');
        userData = {
            "username": data.login,
            "password": data.password
        };
        login(userData)
            .then(data => {
                if (data.token) {
                    console.log(data);
                    localStorage.setItem('jwt', data.token);
                }
            })
            .catch((error) => {
                console.log(error);
            })
            .finally(() => reset());
    }

    return (
        <div className='signin'>
            <h2 className='signin__title subtitle'>Welcome</h2>
            <form onSubmit={handleSubmit(submittedData)}>
                <input
                    className='main-input signin__input'
                    placeholder='Email'
                    type="text"
                    name="login"
                    {...register("login")}
                />
                <input
                    className='main-input signin__input'
                    placeholder='Password'
                    type="password"
                    name="password"
                    {...register("password")}
                />
                <div className="signin__btn">
                    <PrimaryBtn
                        text='LOGIN'
                        style={styleBtn}
                        type='submit'
                    />
                </div>
            </form>
        </div>
    );
}

export default SignIn;