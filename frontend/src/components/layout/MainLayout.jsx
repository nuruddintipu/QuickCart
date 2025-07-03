import NavigationBar from "./NavigationBar.jsx";
import {Outlet} from "react-router-dom";

const MainLayout = () => {
    return (
        <>
            <NavigationBar />
            <div>
                <Outlet />
            </div>
        </>
    );
};

export default MainLayout;