import * as React from 'react';
import {Link} from "react-router-dom";

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
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/playback">Playback</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        );
    }
}
export default Header;