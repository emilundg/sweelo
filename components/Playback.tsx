import * as React from 'react';
import {connect} from 'react-redux';

export interface PlaybackProps {
    dispatch : any;
}

class Playback extends React.Component <PlaybackProps, {} > {
    render() {
        return (
            <div>
                <h1>Playback route</h1>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch : any) => ({dispatch});
const mapStateToProps = (state : any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Playback);