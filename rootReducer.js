import {combineReducers} from "redux";
import products from "./productReducer";
import authenticate from "./reducers/authenticateReducer";
import spotify from "./reducers/spotifyReducer";

export default combineReducers({products, authenticate, spotify});
