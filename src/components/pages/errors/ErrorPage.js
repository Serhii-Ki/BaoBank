import errorGif from '../../../assets/error.gif';

import "./errorPage.scss";

function ErrorPage() {
    return (
        <div>
            <img className='error__page' src={errorGif}/>
        </div>
    );
}

export default ErrorPage;