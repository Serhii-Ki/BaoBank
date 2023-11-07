import React from 'react';
import { Link } from 'react-router-dom';

import SliderOnBoarding from './sliderOnBoarding/SliderOnBoarding';
import PrimaryBtn from '../../../designComponents/PrimaryBtn';

import "./onBoarding.scss";

function OnBoarding() {
    return (
        <div className='onboarding'>
            <div className="onboarding__slider">
                <SliderOnBoarding />
            </div>
            <div className="onboarding__btn">
                <Link to='/signup'>
                    <PrimaryBtn text="Register" dark={false} />
                </Link>
                <Link to='/signin'>
                    <PrimaryBtn text="LOGIN" />
                </Link>

            </div>
        </div>
    );
}

export default OnBoarding;