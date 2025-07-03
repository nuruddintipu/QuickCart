import NavigationBar from "./NavigationBar.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

const MainLayout = () => {
    return (
        <>
            <NavigationBar />
            <div className="content">
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default MainLayout;