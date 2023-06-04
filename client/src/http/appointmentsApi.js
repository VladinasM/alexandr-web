import {$host} from "./index";

export const getAppointmentList = async () => {
    const {data} = await $host.get('api/appointment-list');
    return data;
}
export const getUserAppointments = async (id) => {
    const {data} = await $host.get(`api/user-appointments/${id}`);
    return data;
}

export const setAppointment = async (email, phoneNumber, date) => {
    const {data} = await $host.post('api/set-appointment', {email, phoneNumber, date})
    return data
}
export const updateAppointment = async (id, patientState, description) => {
    const {data} = await $host.post('api/update-appointment', {id, patientState, description})
    return data
}
export const deleteAppointment = async (id) => {
    const {data} = await $host.post('api/delete-appointment', {id})
    return data
}
