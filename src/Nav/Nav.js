import React from 'react';
import './Nav.css';
import { Link } from 'react-router-dom';

class Nav extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="Nav">
                <Link to='/'>Noteful</Link>
            </div>
        )
    }
}

export default Nav;