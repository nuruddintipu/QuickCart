import Homepage from "../pages/Homepage.jsx";
import MainLayout from "../components/layout/MainLayout.jsx";
import {ROUTE_NAMES, ROUTE_PATHS} from "./routeConstants.jsx";
import ProductCatalogPage from "../pages/ProductCatalogPage.jsx";

const routeConfigs = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: ROUTE_PATHS.HOMEPAGE, element: <Homepage />, name: ROUTE_NAMES.HOMEPAGE },
            { path: ROUTE_PATHS.PRODUCTS, element: <ProductCatalogPage />, name: ROUTE_NAMES.PRODUCTS },
        ]
    }
];

export default routeConfigs;