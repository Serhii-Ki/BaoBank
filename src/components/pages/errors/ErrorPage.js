import errorGif from '../../../assets/error.gif';
import { useNavigate } from "react-router-dom";
import "./errorPage.scss";

function ErrorPage() {
    let navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
      };
    return (
        <div onClick={handleBack}>
            <img className='error__page' src={errorGif}/>
        </div>
    );
}

export default ErrorPage;