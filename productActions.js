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
            .get('https://randomuser.me/api/')
            .then(response => {
                return response.data
            })
            .then(data => {
                dispatch(fetchProductsSuccess(data));
                return data;
            })
            .catch(error => dispatch(fetchProductsFailure(error)));
    };
}