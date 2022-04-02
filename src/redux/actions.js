import { CITY, NAME, ROLE } from "./actionTypes"

export const name = name => {
    return {
        type: NAME,
        payload: name
    }
}

export const city = city => {
    return {
        type: CITY,
        payload: city
    }
}

export const role = role => {
    return {
        type: ROLE,
        payload: role
    }
}