import { Outlet } from "react-router-dom";

function PublicLayout() {
    return (
        <div className="public__wrapper">
            <main className="public__main">
                <Outlet />
            </main>
        </div>
    );
}

export default PublicLayout;