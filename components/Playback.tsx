import * as React from 'react';
import {connect} from 'react-redux';
// @ts-ignore
import {setAccessToken} from "../actions/authenticateActions";

export interface PlaybackProps {
    dispatch : any;
    token : string;
}

class Playback extends React.Component < PlaybackProps, {} > {
    componentDidMount() {
        if (window.location.hash) {
            const token = window
                .location
                .hash
                .split('=')[1]
            this
                .props
                .dispatch(setAccessToken(token))
        }
    }
    render() {
        const {token} = this.props;
        return (
            <div>
                <h1>Playback route</h1>
                <p>test</p>
                <p>
                    {token}
                </p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch : any) => ({setAccessToken, dispatch});
const mapStateToProps = (state : any) => ({token: state.authenticate.token});
export default connect(mapStateToProps, mapDispatchToProps)(Playback);