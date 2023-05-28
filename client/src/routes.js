import PersonalAccount from "./pages/PersonalAccount";
import Auth from "./pages/Auth";
import {
    PERSONAL_ROUTE, LEVEL_ROUTE,
    LOGIN_ROUTE,
    MAIN_PAGE_ROUTE,
    PARKING_PLACE_ROUTE,
    PARKING_ROUTE,
    REGISTRATION_ROUTE, ADMIN_ROUTE
} from "./utils/consts";
import MainPage from "./pages/MainPage";
import Parking from "./pages/Parking";
import Level from "./pages/Level";
import AdminPage from "./pages/AdminPage";

export const authRoutes = [
    {
        path: PERSONAL_ROUTE,
        Component: <PersonalAccount/>
    },
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage/>
    },
]

export const publicRoutes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },
    {
        path: REGISTRATION_ROUTE,
        Component: <Auth/>
    },
    // {
    //     path: PARKING_PLACE_ROUTE + '/:id',
    //     Component: <ParkingPlace/>
    // },
    {
        path: MAIN_PAGE_ROUTE,
        Component: <MainPage/>
    },
    {
        path: PARKING_ROUTE,
        Component: <Parking/>
    },
    {
        path: LEVEL_ROUTE,
        Component: <Level/>
    },

]