import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import {createStore} from 'redux';
import {Provider} from 'react-redux';

const initialState = {
    count: 0
};

function reducer(state = initialState, action) {
    console.log('reducer', state, action);
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        default:
            return state;
    }
}

const store = createStore(reducer);
store.dispatch({type: "INCREMENT"});
store.dispatch({type: 'DECREMENT'});

const App = () => (
    <Provider store={store}>
        <Root compiler="TypeScript" framework="React"/>
    </Provider>
)

ReactDOM.render(
    <App/>, document.getElementById('app'));