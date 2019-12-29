import React from 'react';
import './NotesCard.css';
import {Route, Link} from 'react-router-dom';
import Moment from 'react-moment';

class NotesCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div 
                className="NotesCard"
                key={this.props.id}
                id={this.props.id}
                onClick={(e) => this.props.handleNote(e.target.id)}
            >
                <Link to={`/note/${this.props.id}`}>
                    {this.props.name}
                </Link>
                <Moment format="YYYY/MM/DD">
                    {this.props.modified}
                </Moment>
                <button>Delete</button>
            </div>
        )
    }
}

export default NotesCard;