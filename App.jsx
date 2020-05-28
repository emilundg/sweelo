import React from 'react';
import Header from './components/Header.jsx';
import Content from './components/Content.jsx';
class App extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        )
    }
}
export default App;