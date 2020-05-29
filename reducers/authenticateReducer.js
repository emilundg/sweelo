import {SET_ACCESS_TOKEN} from '../actions/authenticateActions';

const initialState = {
    token: undefined
};

export default function authenticateReducer(state = initialState, action) {
    switch (action.type) {
        case SET_ACCESS_TOKEN:
            return {
                ...state,
                token: action.payload.token
            };
        default:
            return state;
    }
}
