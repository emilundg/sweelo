import * as React from 'react';
import {connect} from 'react-redux';
// @ts-ignore
import {fetchProducts} from "../productActions";
import {spotifyConfig} from '../spotifyconfig';

export interface ContentProps {
    products : any;
    loading : any;
    error : any;
    dispatch : any;
}

class Content extends React.Component < ContentProps, {} > {
    render() {
        const {error, loading, products} = this.props;
        const {clientId, redirectUri, endPoint} = spotifyConfig.options;
        return (
            <div>
                <h1>Products</h1>
                <a
                    href={`${endPoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}>Authorize</a>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch : any) => ({fetchProducts, dispatch});
const mapStateToProps = (state : any) => ({products: state.products.items, loading: state.products.loading, error: state.products.error});
export default connect(mapStateToProps, mapDispatchToProps)(Content);