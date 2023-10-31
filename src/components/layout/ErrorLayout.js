import { Outlet } from "react-router-dom";

function ErrorLayout() {
    return (
        <main>
            <Outlet />
        </main>
    );
}

export default ErrorLayout;