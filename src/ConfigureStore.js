import {createStore} from 'redux'
import RootReducer from './RootReducer'

const configureStore=()=>{
    return createStore(RootReducer)
}

export default configureStore
