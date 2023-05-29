import PersonalAccount from "./pages/PersonalAccount";
import Auth from "./pages/Auth";
import {
    PERSONAL_ROUTE, LEVEL_ROUTE,
    LOGIN_ROUTE,
    MAIN_PAGE_ROUTE,
    APPOINTMENT_LIST_ROUTE,
    REGISTRATION_ROUTE, ADMIN_ROUTE, SET_APPOINTMENT_ROUTE
} from "./utils/consts";
import MainPage from "./pages/MainPage";
import AppointmentPage from "./pages/AppointmentPage";
import Level from "./pages/Level";
import AdminPage from "./pages/AdminPage";
import SetAppointment from "./pages/SetAppointment";

export const authRoutes = [
    {
        path: PERSONAL_ROUTE,
        Component: <PersonalAccount/>
    },
    {
        path: ADMIN_ROUTE,
        Component: <AdminPage/>
    },
    {
        path: APPOINTMENT_LIST_ROUTE,
        Component: <AppointmentPage/>
    },
    {
        path: SET_APPOINTMENT_ROUTE,
        Component: <SetAppointment/>
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
    {
        path: MAIN_PAGE_ROUTE,
        Component: <MainPage/>
    },
    {
        path: LEVEL_ROUTE,
        Component: <Level/>
    },

]