import Homepage from "../pages/Homepage.jsx";
import MainLayout from "../components/layout/MainLayout.jsx";
import {ROUTE_NAMES, ROUTE_PATHS} from "./routeConstants.jsx";
import ProductCatalogPage from "../pages/ProductCatalogPage.jsx";
import ProductDetailsPage from "../pages/ProductDetailsPage.jsx";

const routeConfigs = [
    {
        path: "/",
        element: <MainLayout />,
        children: [
            { path: ROUTE_PATHS.HOMEPAGE, element: <Homepage />, name: ROUTE_NAMES.HOMEPAGE },
            { path: ROUTE_PATHS.PRODUCTS, element: <ProductCatalogPage />, name: ROUTE_NAMES.PRODUCTS },
            { path: ROUTE_PATHS.PRODUCT_DESCRIPTION, element: <ProductDetailsPage />, name: ROUTE_NAMES.PRODUCT_DESCRIPTION },
        ]
    }
];

export default routeConfigs;