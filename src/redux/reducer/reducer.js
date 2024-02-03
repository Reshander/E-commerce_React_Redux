import {combineReducers} from "redux";
import { cartProductreducer } from "./cartProductreducer";
import { favProductReducer } from "./favProductReducer";

export const reducer =combineReducers({
    
    favProductReducer,
    cartProductreducer
    
})
    
    
    
    