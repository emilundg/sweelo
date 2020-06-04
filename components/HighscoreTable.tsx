import * as React from 'react';

type HighscoreState = {};
class HighscoreTable extends React.Component < {
    cantGetEnoughRB : number
},
HighscoreState > {
    constructor(props : any) {
        super(props);
        this.state = {}
    }
    render() {
        const {cantGetEnoughRB} = this.props;
        return (
            <div style={styles.highscore}>
                <div style={styles.highscore__tableHeader}>HIGHSCORE</div>
                <div style={styles.highscore__number}>{cantGetEnoughRB}</div>
            </div>
        );
    }
}

const styles = {
    highscore: {
        textAlign: 'center',
        padding: 34,
        borderRadius: 21,
        height: 610,
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: 377,
        backgroundColor: 'rgba(0,0,0,0.55)'
    },
    highscore__tableHeader: {
        fontSize: 21,
        color: 'rgba(255,255,255, 0.89)'
    },
    highscore__number: {
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        fontSize: 133,
        height: '100%'
    }
}
export default HighscoreTable;