import {combineReducers} from "redux";
import products from "./productReducer";
import authenticate from "./reducers/authenticateReducer";

export default combineReducers({products, authenticate});
