import React from 'react';
class Header extends React.Component {
    constructor(props) {
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