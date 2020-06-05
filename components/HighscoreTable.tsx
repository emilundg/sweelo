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

const styles : {
    highscore : React.CSSProperties,
    highscore__tableHeader : React.CSSProperties,
    highscore__number : React.CSSProperties
} = {
    highscore: {
        textAlign: 'center',
        padding: 34,
        borderRadius: 21,
        marginTop: 89,
        marginBottom: 89,
        height: '100vh',
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        width: 377,
        backgroundColor: 'rgba(151,0,204,0.21)'
    },
    highscore__tableHeader: {
        fontSize: 21,
        color: '#035ee8'
    },
    highscore__number: {
        color: '#2de2e6',
        display: 'flex',
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',
        fontSize: 133,
        height: '100%'
    }
}
export default HighscoreTable;