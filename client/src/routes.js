import PersonalAccount from "./pages/PersonalAccount";
import Auth from "./pages/Auth";
import {
    PERSONAL_ROUTE,
    LOGIN_ROUTE,
    MAIN_PAGE_ROUTE,
    APPOINTMENT_LIST_ROUTE,
    ADMIN_ROUTE,
    SET_APPOINTMENT_ROUTE
} from "./utils/consts";
import MainPage from "./pages/MainPage";
import AppointmentPage from "./pages/AppointmentPage";
import AdminPage from "./pages/AdminPage";
import SetAppointment from "./pages/SetAppointment";



export const routes = [
    {
        path: LOGIN_ROUTE,
        Component: <Auth/>
    },

    {
        path: MAIN_PAGE_ROUTE,
        Component: <MainPage/>
    },
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