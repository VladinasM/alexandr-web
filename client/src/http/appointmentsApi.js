import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode";

export const getAppointmentList = async () => {
    const {data} = await $host.get('api/appointment-list');
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