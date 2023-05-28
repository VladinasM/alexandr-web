import React from 'react';
import {$host, $authHost} from "./index";

export const buyPlaceWithCard = async (cardNumber, validity, cvv, price) => {
    const {data} = await $host.post('/api/bank/buy-place', {cardNumber, validity, cvv, price})
    return data
}