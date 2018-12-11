import {ADD_NUMBER, SUBSTRACT_NUMBER} from "./Constant";

export const addNumber = () => {
    return {
        type: ADD_NUMBER
    }
}

export const substractNumber = () => {
    return {
        type: SUBSTRACT_NUMBER
    }
}
