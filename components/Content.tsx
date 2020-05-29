import * as React from 'react';
import {connect} from 'react-redux';
// @ts-ignore
import {spotifyConfig} from '../spotifyconfig';

export interface ContentProps {
    dispatch : any;
}

class Content extends React.Component < ContentProps, {} > {
    render() {
        const {clientId, redirectUri, endPoint, scope} = spotifyConfig.options;
        return (
            <div>
                <a
                    href={`${endPoint}?client_id=${clientId}&scope=${scope}&redirect_uri=${redirectUri}&response_type=token&show_dialog=true`}>Authorize</a>
            </div>
        );
    }
}

const mapDispatchToProps = (dispatch : any) => ({dispatch});
const mapStateToProps = (state : any) => ({});
export default connect(mapStateToProps, mapDispatchToProps)(Content);