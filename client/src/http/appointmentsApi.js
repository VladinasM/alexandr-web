import {$host, $authHost} from "./index";

export const getAppointmentList = async () => {
    const {data} = await $authHost.get('api/appointment-list');
    return data;
}
export const getUserAppointments = async (id) => {
    const {data} = await $authHost.get(`api/user-appointments/${id}`);
    return data;
}

export const setAppointment = async (email, phoneNumber, date) => {
    const {data} = await $authHost.post('api/set-appointment', {email, phoneNumber, date})
    return data
}
export const updateAppointment = async (email, patientState, description) => {
    const {data} = await $authHost.post('api/update-appointment', {email, patientState, description})
    return data
}
