import * as React from 'react';
import {connect} from 'react-redux';

export interface ProgressBarProps {
    progress : number;
    songLength : number;
}

type ProgressBarState = {
    localProgress: number;
    localProgressPercent: number;
}

let progressInterval : any;
class ProgressBar extends React.Component < ProgressBarProps,
ProgressBarState > {
    constructor(props : any) {
        super(props);
        this.state = {
            localProgress: 0,
            localProgressPercent: 0
        }
    }
    componentDidMount() {
        const {progress, songLength} = this.props;
        this.setState({localProgressPercent: progress});
        this.calculateProgress(progress, songLength);
    }
    componentDidUpdate(prevProps : any) {
        if (prevProps.progress !== this.props.progress && prevProps.songLength !== this.props.songLength) {
            const {progress, songLength} = this.props;
            clearInterval(progressInterval);
            this.setState({localProgressPercent: 0});
            this.calculateProgress(progress, songLength);
        }
    }
    calculateProgress(currentProgress : number, songLength : number) {
        progressInterval = setInterval(() => {
            const progressCalculation = (currentProgress += 650) / songLength * 100;
            this.setState({
                localProgress: (currentProgress += 650),
                localProgressPercent: progressCalculation < 100
                    ? progressCalculation
                    : 100
            })
        }, 650);
    }
    convertMsToReadable(timeInMs : number) {
        return Math.floor(timeInMs / (1000 * 60)) % 60 + ":" + Math.floor(timeInMs / 1000) % 60;
    }
    render() {
        const {localProgressPercent, localProgress} = this.state;
        const {songLength} = this.props;
        return (
            <div style={styles.progressBar}>
                <div>{this.convertMsToReadable(localProgress)}</div>
                <div style={styles.progressBar__background}>
                    <div
                        style={{
                        transition: 'width 400ms linear',
                        width: `${localProgressPercent}%`,
                        height: '100%',
                        backgroundColor: 'rgb(212,0,120)',
                        borderRadius: 55
                    }}></div>
                </div>
                <div>{this.convertMsToReadable(songLength)}</div>
            </div>
        );
    }
}

const styles : {
    progressBar : React.CSSProperties
    progressBar__background : React.CSSProperties
} = {
    progressBar: {
        display: 'grid',
        flex: 1,
        gridTemplateColumns: '2rem 1fr 2rem',
        gridColumnGap: '1.25rem',
        alignItems: 'center',
        marginTop: 55,
        width: '89%',
        maxWidth: '55rem'
    },
    progressBar__background: {
        width: '100%',
        height: 8,
        backgroundColor: 'rgba(3,94,232, 0.21)',
        borderRadius: 89,
        boxShadow: '0px 0px 13px 8px rgba(45,226,230,0.13)'
    }
}

const mapDispatchToProps = (dispatch : any) => ({dispatch});
const mapStateToProps = (state : any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);