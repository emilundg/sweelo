import axios from 'axios';

export const FETCH_CURRENTLYPLAYING_BEGIN = 'FETCH_CURRENTLYPLAYING_BEGIN';
export const FETCH_CURRENTLYPLAYING_SUCCESS = 'FETCH_CURRENTLYPLAYING_SUCCESS';
export const FETCH_CURRENTLYPLAYING_FAILURE = 'FETCH_CURRENTLYPLAYING_FAILURE';

export const fetchCurentlyPlayingBegin = () => ({type: FETCH_CURRENTLYPLAYING_BEGIN});
export const fetchCurentlyPlayingSuccess = response => ({type: FETCH_CURRENTLYPLAYING_SUCCESS, payload: {
        response
    }});
export const fetchCurentlyPlayingFailure = error => ({type: FETCH_CURRENTLYPLAYING_FAILURE, payload: {
        error
    }});

export const getCurrentlyPlaying = (token) => {
    return dispatch => {
        dispatch(fetchCurentlyPlayingBegin());
        return axios
            .get('/current-song', {params: {
                token
            }})
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch(fetchCurentlyPlayingSuccess(data));
                return data;
            })
            .catch(error => {
                dispatch(fetchCurentlyPlayingFailure(error))
            });
    };
}