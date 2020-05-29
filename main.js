import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import {createStore, applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';

import {BrowserRouter} from "react-router-dom";

import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(thunk));
const App = () => (
    <Provider store={store}>
        <BrowserRouter>
            <Root/>
        </BrowserRouter>
    </Provider>
)

ReactDOM.render(
    <App/>, document.getElementById('app'));