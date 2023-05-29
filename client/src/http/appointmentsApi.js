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
export const getPlaceOwner = async (placeId) => {
    const {data} = await $authHost.post('api/get-place-owner', {placeId})
    return data
}
export const setPlaceToFree = async (placeId) => {
    const {data} = await $authHost.post('api/set-place-to-free', {placeId})
    return data
}