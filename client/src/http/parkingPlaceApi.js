import {$host, $authHost} from "./index";
import jwt_decode from "jwt-decode";

export const getFreePlaces = async () => {
    const {data} = await $host.get('api/all-places');
    return data;
}

export const getPlacesOnLevel = async  (levelId) => {
    const {data} = await $host.get('api/level/' + levelId);
    return data;
}

export const sellPlace = async (placeId) => {
    const {data} = await $authHost.post('api/sell-place', {placeId})
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