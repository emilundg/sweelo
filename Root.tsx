import * as React from 'react';
import Header from './components/Header';
import Content from './components/Content';
class Root extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content compiler={"My compiler"}/>
            </div>
        )
    }
}
export default Root;