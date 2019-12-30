import React from 'react';
import './FolderCard.css';
import {Route, Link} from 'react-router-dom';
import NotefulContext from '../App/NotefulContext';

class FolderCard extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = NotefulContext;

    render() {
        return (
            <div className="FolderCard" id={this.props.id} onClick={(e) => this.context.setFolder(e.target.id)}>
                <Link to={`/folder/${this.props.id}`}>
                    {this.props.name}
                </Link>
            </div>
        )
    }
}

export default FolderCard;