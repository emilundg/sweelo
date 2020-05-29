import * as React from 'react';
import {connect} from 'react-redux';
// @ts-ignore
import {setAccessToken} from "../actions/authenticateActions";
// @ts-ignore
import {getCurrentlyPlaying} from "../actions/spotifyActions";

export interface PlaybackProps {
    dispatch : any;
    token : string;
    currentlyPlayingResponse : object;
}

class Playback extends React.Component < PlaybackProps, {} > {
    componentDidMount() {
        if (window.location.hash) {
            const token = window
                .location
                .hash
                .split('=')[1]
                .split('&')[0]
            this
                .props
                .dispatch(setAccessToken(token))
            this
                .props
                .dispatch(getCurrentlyPlaying(token))
        }
    }
    render() {
        const {currentlyPlayingResponse} = this.props;
        return (
            <div>
                {console.log(currentlyPlayingResponse)}
                <h1>Playback route</h1>
                <p>test</p>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch : any) => ({setAccessToken, getCurrentlyPlaying, dispatch});
const mapStateToProps = (state : any) => ({token: state.authenticate.token, currentlyPlayingResponse: state.spotify.currentlyPlayingResponse});
export default connect(mapStateToProps, mapDispatchToProps)(Playback);