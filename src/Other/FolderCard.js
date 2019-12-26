import React from 'react';
import './FolderCard.css';
import {Route, Link} from 'react-router-dom';

class FolderCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="FolderCard" id={this.props.id} onClick={(e) => this.props.handleFolder(e.target.id)}>
                <Link to={`/folder/${this.props.id}`}>
                    {this.props.name}
                </Link>
            </div>
        )
    }
}

export default FolderCard;