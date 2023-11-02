import { Outlet } from "react-router-dom";

import HeaderPrivate from "../pages/partials/header/HeaderPrivate";
import Footer from "../pages/partials/footer/Footer";

import "./layout.scss";

function PrivateLayout() {
    return (
        <div className="private__layout">
            <HeaderPrivate />
            <main className="main">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
}

export default PrivateLayout;