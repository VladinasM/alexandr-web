import {$host} from "./index"

export const registration = async (email, password, role, position, fullName) => {
    const {data} = await $host.post('api/user/registration', {email, password, role, position, fullName})
    return data
}
export const login = async (email, password) => {
    const {data} = await $host.post('api/user/login', {email, password})
    return data
}

export const updateUserInfo = async (id, email, password, role, position, fullName) => {
    const {data} = await $host.post('api/user/update-user-info', {id, email, password, role, position, fullName})
    return data
}

export const getUserData = async (email) => {
    const {data} = await $host.get(`api/user/get-user-data/${email}`)
    return data
}
export const getUsers = async () => {
    const {data} = await $host.get(`api/user/get-users`)
    return data
}


export const delUserAcc = async (id) => {
    const {data} = await $host.post('api/user/del-user', {id})
    return data
}