import * as React from 'react';
import {connect} from 'react-redux';
// @ts-ignore
import {setAccessToken} from "../actions/authenticateActions";
// @ts-ignore
import {getCurrentlyPlaying} from "../actions/spotifyActions";
// @ts-ignore
import HighscoreTable from "./HighScoreTable";
// @ts-ignore
import ProgressBar from "./ProgressBar";

let partyInterval : any;
export interface PlaybackProps {
    dispatch : any;
    token : string;
    currentlyPlayingResponse : any;
    progress : number;
    trackItem : any;
}

type PlaybackState = {
    currentDiscoBackground: string;
    cantGetEnoughRB: number;
};

class Playback extends React.Component < PlaybackProps,
PlaybackState > {
    constructor(props : any) {
        super(props);
        this.state = {
            currentDiscoBackground: null,
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
            if (trackItem.name === 'Friday') {
                this.itsFriday();
            }
            this.setSongTimer(progress, trackItem, token);
        }
    }
    setSongTimer = (progress : number, trackItem : any, token : string) => {
        const {duration_ms} = trackItem;
        const changeSongTimer = setTimeout(async() => {
            await this
                .props
                .dispatch(getCurrentlyPlaying(token))
            const {trackItem, progress} = this.props;
            clearTimeout(changeSongTimer);
            this.setSongTimer(progress, trackItem, token);
            if (trackItem.name === 'Friday') {
                this.itsFriday();
            } else {
                this.partyStoppedBecauseIwalkedOut();
            }
        }, (duration_ms - progress));
    }
    itsFriday() {
        this.partyDontStartTilIWalkIn();
        let {cantGetEnoughRB} = this.state;
        cantGetEnoughRB = cantGetEnoughRB += 1;
        this.setState({cantGetEnoughRB});
    }
    partyDontStartTilIWalkIn() {
        const partyColors = ['#0FC0FC', '#7B1DAF', '#FF2FB9', '#D4FF47', '#1B3649'];
        partyInterval = setInterval(() => {
            this.setState({
                currentDiscoBackground: partyColors[Math.floor(Math.random() * (partyColors.length - 0) + 0)]
            })
        }, 1000)
    }
    partyStoppedBecauseIwalkedOut() {
        clearInterval(partyInterval);
        this.setState({currentDiscoBackground: 'transparent'});
    }
    render() {
        const {currentlyPlayingResponse, trackItem, progress} = this.props;
        const {cantGetEnoughRB, currentDiscoBackground} = this.state;
        if (currentlyPlayingResponse) {
            return (
                <div
                    style={{
                    height: '100vh',
                    transition: 'background-color 250ms linear',
                    backgroundColor: currentDiscoBackground
                }}>
                    <div style={styles.playback__centerContainer}>
                        {console.log(currentlyPlayingResponse)}
                        <div style={styles.playback__albumContainer}>
                            <div style={styles.playback__songtitle}>{currentlyPlayingResponse.item.name}</div>
                            <div style={styles.playback__artistWrapper}>
                                {trackItem
                                    .artists
                                    .map((artist : any) => {
                                        return (
                                            <div style={styles.playback__artistText} key={artist.id}>{artist.name}</div>
                                        )
                                    })}
                            </div>
                            <div
                                style={{
                                marginTop: 21,
                                height: 400,
                                width: 400,
                                backgroundPosition: 'center',
                                backgroundSize: 'fit',
                                backgroundImage: `url(${trackItem.album.images[0].url})`,
                                transition: 'box-shadow 0.3s ease-in-out',
                                boxShadow: '0px 0px 55px 19px rgba(45,226,230,0.34)'
                            }}></div>
                        </div>
                        <ProgressBar progress={progress} songLength={trackItem.duration_ms}></ProgressBar>
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

const styles : {
    playback__songtitle : React.CSSProperties,
    playback__centerContainer : React.CSSProperties,
    playback__albumContainer : React.CSSProperties,
    playback__artistWrapper : React.CSSProperties,
    playback__artistText : React.CSSProperties
} = {
    playback__songtitle: {
        maxWidth: '55rem',
        textAlign: 'center',
        fontSize: 55
    },
    playback__centerContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    playback__albumContainer: {
        alignItems: 'center',
        display: 'flex',
        flex: 1,
        justifyContent: 'center',
        flexDirection: 'column'
    },
    playback__artistWrapper: {
        display: 'flex',
        paddingBottom: 21,
        flexDirection: 'row'
    },
    playback__artistText: {
        fontSize: 21,
        color: '#d40078',
        margin: 5
    }
}

const mapDispatchToProps = (dispatch : any) => ({setAccessToken, getCurrentlyPlaying, dispatch});
const mapStateToProps = (state : any) => ({token: state.authenticate.token, currentlyPlayingResponse: state.spotify.currentlyPlayingResponse, trackItem: state.spotify.trackItem, progress: state.spotify.progress});
export default connect(mapStateToProps, mapDispatchToProps)(Playback);