import {combineReducers} from 'redux'
import NumberReducer from './NumberReducer'

const rootReducer=combineReducers({
    number: NumberReducer
})

export default rootReducer
