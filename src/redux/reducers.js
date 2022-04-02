import { NAME, CITY, ROLE } from "./actionTypes"

const initialState = {
    name: "Jeremy Rose",
    city: "New York, NY",
    role: "Product Designer",
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
        default:
            return state
    }
}

export default reducer