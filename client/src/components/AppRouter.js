import React, {useContext} from 'react';
import {Routes, Route} from "react-router-dom";
import {routes} from "../routes";
import {Context} from "../index";
import {
  ADMIN_DELETE_ROUTE,
  ADMIN_REGISTER_ROUTE,
  ADMIN_ROUTE,
  APPOINTMENT_LIST_ROUTE,
  LOGIN_ROUTE,
  MAIN_PAGE_ROUTE,
  PERSONAL_ROUTE,
  SET_APPOINTMENT_ROUTE
} from "../utils/consts";
import MainPage from "../pages/MainPage";
import Auth from "../pages/Auth";
import PersonalAccount from "../pages/PersonalAccount";
import AdminPage from "../pages/AdminPage";
import AppointmentPage from "../pages/AppointmentPage";
import SetAppointment from "../pages/SetAppointment";
import {observer} from "mobx-react-lite";
import RegisterNewUser from "../pages/RegisterNewUser";

const AppRouter =observer (() => {
  const {user} = useContext(Context)

  return (
    <Routes>
      <Route path={MAIN_PAGE_ROUTE} element={<MainPage/>}/>
      <Route path={LOGIN_ROUTE} element={<Auth/>}/>
      {user.isAuth && <Route path={PERSONAL_ROUTE} element={<PersonalAccount/>}/>}
      {user.user.role === 'админ' && <Route path={ADMIN_ROUTE} element={<AdminPage/>}/>}
      {user.user.role === 'админ' && <Route path={ADMIN_REGISTER_ROUTE} element={<RegisterNewUser/>}/>}
      {(user.user.role === 'доктор' || user.user.role === 'админ') && <Route path={APPOINTMENT_LIST_ROUTE} element={<AppointmentPage/>}/>}
      {user.user.role === 'пациент' && <Route path={SET_APPOINTMENT_ROUTE} element={<SetAppointment/>}/>}
    </Routes>
  );
});

export default AppRouter;