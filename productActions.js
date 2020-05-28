import axios from 'axios';

export const FETCH_PRODUCTS_BEGIN = 'FETCH_PRODUCTS_BEGIN';
export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_FAILURE = 'FETCH_PRODUCTS_FAILURE';

export const fetchProductsBegin = () => ({type: FETCH_PRODUCTS_BEGIN});
export const fetchProductsSuccess = products => ({type: FETCH_PRODUCTS_SUCCESS, payload: {
        products
    }});
export const fetchProductsFailure = error => ({type: FETCH_PRODUCTS_FAILURE, payload: {
        error
    }});

export const fetchProducts = () => {
    return dispatch => {
        dispatch(fetchProductsBegin());
        return axios
            .get('https://accounts.spotify.com/authorize', {
            params: {
                client_id: '0e02e28b4df649b294c8edcc010595dd',
                response_type: 'token',
                redirect_uri: 'https://localhost:8080'
            }
        })
            .then(response => {
                console.log(response)
                return response.data
            })
            .then(data => {
                dispatch(fetchProductsSuccess(data));
                return data;
            })
            .catch(error => {
                console.log(error)
                // dispatch(fetchProductsFailure(error)
            })
    };
}