import * as React from 'react';
import {connect} from 'react-redux';
import {increment, decrement} from '../actions';
import {fetchProducts} from "../informationActions";

function mapStateToProps(state : any) {
    return {count: state.count};
}

export interface ContentProps {
    compiler : string;
}

class Content extends React.Component < ContentProps, {} > {
    componentDidMount() {
        this
            .props
            .dispatch(fetchProducts());
    }
    increment() {
        this
            .props
            .dispatch(increment())
    }
    render() {
        const {compiler, error, loading, products} = this.props;
        return (
            <div>
                <h1>{compiler}</h1>
                <p>{this.props.count}</p>
                {products}
                <button onClick={() => this.increment()}>Increment</button>
            </div>
        );
    }
}
export default connect(mapStateToProps)(Content);