import * as React from 'react';
import {connect} from 'react-redux';
import {fetchProducts} from "../productActions";

export interface ContentProps {
    products : any;
    loading : any;
    error : any;
    dispatch : any;
}

class Content extends React.Component < ContentProps, {} > {
    componentDidMount() {
        this
            .props
            .dispatch(fetchProducts());
    }
    render() {
        const {error, loading, products} = this.props;
        return (
            <div>
                {products.toString()}
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch : any) => ({fetchProducts, dispatch});
const mapStateToProps = (state : any) => ({products: state.products, loading: state.products.loading, error: state.products.error});
export default connect(mapStateToProps, mapDispatchToProps)(Content);