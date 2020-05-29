import {FETCH_CURRENTLYPLAYING_BEGIN, FETCH_CURRENTLYPLAYING_SUCCESS, FETCH_CURRENTLYPLAYING_FAILURE} from '../actions/spotifyActions';

const initialState = {
    currentlyPlayingResponse: undefined,
    loading: false,
    error: null
};

export default function spotifyReducer(state = initialState, action) {
    switch (action.type) {
        case FETCH_CURRENTLYPLAYING_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };
        case FETCH_CURRENTLYPLAYING_SUCCESS:
            return {
                ...state,
                loading: false,
                currentlyPlayingResponse: action.payload.response
            };
        case FETCH_CURRENTLYPLAYING_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                currentlyPlayingResponse: undefined
            };
        default:
            return state;
    }
}
