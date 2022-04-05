import { NAME, CITY, ROLE, PHONE, ADDRESS, EMAIL, SITE, BIRTHDAY, GENDER, WORK1, WORK2 } from "./actionTypes"

const initialState = {
    name: "Jeremy Rose",
    city: "New York, NY",
    role: "Product Designer",
    phone: "+1 123 456 7890",
    address: `525 E 68th Street 
    New York, NY 10651-78 156-187-60`,
    // address: {
    //     address1: "525 E 68th Street",
    //     address2: "New York, NY 10651-78 156-187-60"
    // },
    email: "hello@jeremyrose.com",
    site: "www.jeremyrose.com",
    birthday: "June 5, 1992",
    gender: "Male",
    work1: "Spotify New York",
    work2: "Metropolitan Museum"
}

const reducer = ( state = initialState, action ) => {
    switch(action.type) {
        case NAME:
            return {
                ...state,
                name: action.payload
            }
        case CITY:
            return {
                ...state,
                city: action.payload
            }
        case ROLE:
            return {
                ...state,
                role: action.payload
            }
        case PHONE: 
            return {
                ...state,
                phone: action.payload
            }
        case ADDRESS: 
            return {
                ...state,
                address: action.payload
            }
        case EMAIL: 
            return {
                ...state,
                email: action.payload
            }
        case SITE:
            return {
                ...state,
                site: action.payload
            }
        case BIRTHDAY:
            return {
                ...state,
                birthday: action.payload
            }
        case GENDER:
            return {
                ...state,
                gender: action.payload
            }
        case WORK1:
            return {
                ...state,
                work1: action.payload
            }
        case WORK2:
            return {
                ...state,
                work2: action.payload
            }
        default:
            return state
    }
}

export default reducer