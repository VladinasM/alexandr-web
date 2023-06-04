import {$host} from "./index"

export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    console.log(data)
    return data
}

export const setUserData = async (phoneNumber, surname, name, id) => {
    const {data} = await $host.post('api/user/set-user-data', {phoneNumber, surname, name, id})
    return data
}
export const connectUserAndPlace = async (userId, parkingPlacePlaceId) => {
    const {data} = await $host.post('api/user/connect-user-place', {userId, parkingPlacePlaceId})
    return data
}
export const getUserData = async (email) => {
    const {data} = await $host.get(`api/user/get-user-data/${email}`)
    return data
}


export const delUserAcc = async (email) => {
    const {data} = await $host.post('api/user/del-user', {email})
    return data
}