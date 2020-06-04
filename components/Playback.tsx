import * as React from 'react';
import {connect} from 'react-redux';
// @ts-ignore
import {setAccessToken} from "../actions/authenticateActions";
// @ts-ignore
import {getCurrentlyPlaying} from "../actions/spotifyActions";
// @ts-ignore
import HighscoreTable from "./HighScoreTable";

export interface PlaybackProps {
    dispatch : any;
    token : string;
    currentlyPlayingResponse : any;
    progress : number;
    trackItem : any;
}

type PlaybackState = {
    cantGetEnoughRB: number
};

class Playback extends React.Component < PlaybackProps,
PlaybackState > {
    constructor(props : any) {
        super(props);
        this.state = {
            cantGetEnoughRB: 0
        }
    }
    componentDidMount = async() => {
        if (window.location.hash) {
            const token = window
                .location
                .hash
                .split('=')[1]
                .split('&')[0]
            this
                .props
                .dispatch(setAccessToken(token))
            await this
                .props
                .dispatch(getCurrentlyPlaying(token))
            const {trackItem, progress} = this.props;
            this.setSongTimer(progress, trackItem, token);
        }
    }
    setSongTimer(progress : number, trackItem : any, token : string) {
        const {duration_ms} = trackItem;
        const changeSongTimer = setTimeout(async() => {
            await this
                .props
                .dispatch(getCurrentlyPlaying(token))
            const {trackItem, progress} = this.props;
            clearTimeout(changeSongTimer);
            this.setSongTimer(progress, trackItem, token);
            console.log(trackItem.name)
            if (trackItem.name === 'Friday') {
                let {cantGetEnoughRB} = this.state;
                cantGetEnoughRB = cantGetEnoughRB += 1;
                this.setState({cantGetEnoughRB});
            }
        }, (duration_ms - progress));
    }
    render() {
        const {currentlyPlayingResponse, trackItem} = this.props;
        const {cantGetEnoughRB} = this.state;
        if (currentlyPlayingResponse) {
            return (
                <div>
                    <div>
                        {console.log(currentlyPlayingResponse)}
                        <div style={styles.playback_albumContainer}>
                            <div style={styles.playback__songtitle}>{currentlyPlayingResponse.item.name}</div>
                            {trackItem
                                .artists
                                .map((artist: []) => {
                                    return (
                                        <p key={artist.id}>{artist.name}</p>
                                    )
                                })}
                            <div
                                style={{
                                height: 400,
                                width: 400,
                                backgroundPosition: 'center',
                                backgroundSize: 'fit',
                                backgroundImage: `url(${trackItem.album.images[0].url})`,
                                boxShadow: '0px 0px 55px 19px rgba(45,226,230,0.34)'
                            }}></div>
                        </div>
                    </div>
                    <HighscoreTable cantGetEnoughRB={cantGetEnoughRB}></HighscoreTable>
                </div>
            );
        }
        return (
            <div></div>
        )
    }
}

const styles = {
    playback__songtitle: {
        fontSize: 55
    },
    playback_albumContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    }
}

const mapDispatchToProps = (dispatch : any) => ({setAccessToken, getCurrentlyPlaying, dispatch});
const mapStateToProps = (state : any) => ({token: state.authenticate.token, currentlyPlayingResponse: state.spotify.currentlyPlayingResponse, trackItem: state.spotify.trackItem, progress: state.spotify.progress});
export default connect(mapStateToProps, mapDispatchToProps)(Playback);