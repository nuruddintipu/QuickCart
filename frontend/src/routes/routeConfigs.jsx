import Homepage from "../pages/Homepage.jsx";
import MainLayout from "../components/layout/MainLayout.jsx";
import {ROUTE_NAMES, ROUTE_PATHS} from "./routeConstants.jsx";

const routeConfigs = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: ROUTE_PATHS.HOMEPAGE, element: <Homepage />, name: ROUTE_NAMES.HOMEPAGE }
        ]
    }
];

export default routeConfigs;