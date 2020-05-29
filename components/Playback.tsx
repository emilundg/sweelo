import * as React from 'react';
import {connect} from 'react-redux';

export interface PlaybackProps {
    dispatch : any;
}

class Playback extends React.Component < PlaybackProps, {} > {
    componentDidMount() {
        if (window.location.hash) {
            const token = window.location.hash.split('=')[1]
        } 
    }
    render() {
        return (
            <div>
                <h1>Playback route</h1>
                <p>test</p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch : any) => ({dispatch});
const mapStateToProps = (state : any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Playback);