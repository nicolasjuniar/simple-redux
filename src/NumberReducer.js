import {ADD_NUMBER, SUBSTRACT_NUMBER} from "./Constant";

const initialState = {
    number: 0
}

const numberReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_NUMBER: {
            return {
                ...state,
                number: state.number+1
            }
        }
        case SUBSTRACT_NUMBER: {
            return {
                ...state,
                number: state.number-1
            }
        }
        default:
            return state
    }
}

export default numberReducer
