import * as React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Playback from './components/Playback';
import {Route, BrowserRouter as Router, Switch} from 'react-router-dom';

class Root extends React.Component {
    render() {
        return (
            <Router>
                <Header/>
                <Switch>
                    <Route path='/playback'>
                        <Playback/>
                    </Route>
                    <Route path='/'>
                        <Content/>
                    </Route>
                </Switch>
            </Router>
        )
    }
}
export default Root;