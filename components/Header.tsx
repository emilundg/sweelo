import * as React from 'react';

type HeaderState = {
    header: string
};
class Header extends React.Component < {},
HeaderState > {
    constructor(props : any) {
        super(props);
        this.state = {
            header: "Sweelo"
        }
    }
    render() {
        const {header} = this.state;
        return (
            <div>
                <h1>{header}</h1>
            </div>
        );
    }
}
export default Header;