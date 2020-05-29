import * as React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Playback from './components/Playback';
import {Route, Switch} from 'react-router-dom';

class Root extends React.Component {
    render() {
        const Root = () => (
            <div>
                <Switch>
                    <Header/>
                    <Route path='/'>
                        <Content/>
                    </Route>
                    <Route path='/playback'>
                        <Playback/>
                    </Route>
                </Switch>
            </div>
        )
        return (
            <Switch>
                <Root/>
            </Switch>
        );
    }
}
export default Root;