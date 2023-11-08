import pay from "../../../../assets/footerIcons/pay.svg";
import clockArrow from "../../../../assets/footerIcons/clock_arrow.svg";
import medal from "../../../../assets/footerIcons/medal.svg";
import wallet from "../../../../assets/footerIcons/wallet.svg";

import "./footer.scss";

function Footer() {
    return (
        <footer className="footer">
            <a className="footer__link" href="!#"><img className="footer__img footer__img-active" src={pay} alt="pay" /></a>
            <a href="!#"><img className="footer__img" src={clockArrow} alt="pay" /></a>
            <a href="!#"><img className="footer__img" src={medal} alt="pay" /></a>
            <a href="!#"><img className="footer__img" src={wallet} alt="pay" /></a>
        </footer>
    );
}

export default Footer;