import { ADDRESS, BIRTHDAY, CITY, EMAIL, GENDER, NAME, PHONE, ROLE, SITE } from "./actionTypes"

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

export const phone = phone => {
    return {
        type: PHONE,
        payload: phone
    }
}

export const address = address => {
    return {
        type: ADDRESS,
        payload: address
    }
}

export const email = email => {
    return {
        type: EMAIL,
        payload: email
    }
}

export const site = site => {
    return {
        type: SITE,
        payload: site
    }
}

export const birthday = birthday => {
    return {
        type: BIRTHDAY,
        payload: birthday
    }
}

export const gender = gender => {
    return {
        type: GENDER,
        payload: gender
    }
}

export const work1 = work1 => {
    return {
        type: GENDER,
        payload: work1
    }
}

export const work2 = work2 => {
    return {
        type: GENDER,
        payload: work2
    }
}