import React from 'react';
import './NotesCard.css';
import {Route, Link} from 'react-router-dom';

class NotesCard extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="NoteCard" key={this.props.id} id={this.props.id} onClick={(e) => this.props.handleNote(e.target.id)}>
                <Link to={`/note/${this.props.id}`}>
                    {this.props.name}
                </Link>
                {this.props.modified}
                <button>Delete</button>
            </div>
        )
    }
}

export default NotesCard;