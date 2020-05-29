import {combineReducers} from "redux";
import authenticate from "./reducers/authenticateReducer";
import spotify from "./reducers/spotifyReducer";

export default combineReducers({authenticate, spotify});
