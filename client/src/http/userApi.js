import {$host, $authHost} from "./index"
import jwt_decode from "jwt-decode"


export const registration = async (email, password, fullName, position) => {
    const {data} = await $host.post('api/user/registration', {email, password, fullName, position})
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token)
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token)
}
export const check = async () => {
    const {data} = await $authHost.get('api/user/auth')
    localStorage.setItem('token', data.token);
    return jwt_decode(data.token)
}
export const setUserData = async (phoneNumber, surname, name, id) => {
    const {data} = await $authHost.post('api/user/set-user-data', {phoneNumber, surname, name, id})
    return data
}
export const connectUserAndPlace = async (userId, parkingPlacePlaceId) => {
    const {data} = await $authHost.post('api/user/connect-user-place', {userId, parkingPlacePlaceId})
    return data
}
export const getUserData = async (email) => {
    const {data} = await $authHost.get(`api/user/get-user-data/${email}`)
    return data
}
export const getUserAppointments = async (userId) => {
    const {data} = await $authHost.get(`api/user/get-user-app/${userId}`)
    return data
}

export const delUserAcc = async (id) => {
    const {data} = await $authHost.post('api/user/del-user', {id})
    return data
}