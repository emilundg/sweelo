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
            <div
                style={{
                display: 'flex',
                justifyContent: 'center',
                borderRadius: 21,
                height: 610,
                position: 'absolute',
                top: 0,
                bottom: 0,
                right: 0,
                width: 377,
                backgroundColor: 'rgba(0,0,0,0.21)'
            }}>
                <h1>Highscore</h1>
                <div>{cantGetEnoughRB}</div>
            </div>
        );
    }
}
export default HighscoreTable;