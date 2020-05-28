import * as React from 'react';

export interface ContentProps {
    compiler : string;
}

class Content extends React.Component < ContentProps, {} > {
    render() {
        const {compiler} = this.props;
        return (
            <div>
                <h1>{compiler}</h1>
            </div>
        );
    }
}
export default Content;