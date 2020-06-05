import * as React from 'react';
import {connect} from 'react-redux';

export interface ProgressBarProps {
    progress : number;
    songLength : number;
}

type ProgressBarState = {
    localProgress: number;
}

let progressInterval : any;
class ProgressBar extends React.Component < ProgressBarProps,
ProgressBarState > {
    constructor(props : any) {
        super(props);
        this.state = {
            localProgress: 0
        }
    }
    componentDidMount() {
        const {progress, songLength} = this.props;
        this.setState({localProgress: progress});
        this.calculateProgress(progress, songLength);
    }
    componentDidUpdate(prevProps : any) {
        if (prevProps.progress !== this.props.progress && prevProps.songLength !== this.props.songLength) {
            const {progress, songLength} = this.props;
            clearInterval(progressInterval);
            this.setState({localProgress: 0});
            this.calculateProgress(progress, songLength);
        }
    }
    calculateProgress(currentProgress : number, songLength : number) {
        progressInterval = setInterval(() => {
            this.setState({
                localProgress: (currentProgress += 650) / songLength * 100
            })
        }, 650);
    }
    render() {
        const {localProgress} = this.state;
        return (
            <div style={styles.progressBar}>
                <div
                    style={{
                    transition: 'width 400ms linear',
                    width: `${localProgress}%`,
                    height: '100%',
                    backgroundColor: 'blue',
                    borderRadius: 55
                }}></div>
            </div>
        );
    }
}

const styles : {
    progressBar : React.CSSProperties
} = {
    progressBar: {
        marginTop: 34,
        width: '89%',
        maxWidth: '55rem',
        height: 13,
        backgroundColor: 'white',
        borderRadius: 55
    }
}

const mapDispatchToProps = (dispatch : any) => ({dispatch});
const mapStateToProps = (state : any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(ProgressBar);