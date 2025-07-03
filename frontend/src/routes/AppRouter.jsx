import {useRoutes} from "react-router-dom";
import routeConfigs from "./routeConfigs.jsx";
import {Suspense} from "react";

const AppRouter = () => {
    const appRoutes = useRoutes(routeConfigs);

    return (
        <Suspense fallback={<div>Loading.....</div>}>
            {appRoutes}
        </Suspense>
    );
};

export default AppRouter;