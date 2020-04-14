import React from 'react';
import './Notes.css';
import NotesCard from './NotesCard';
import NotefulContext from '../App/NotefulContext';
import { Link } from 'react-router-dom';

class Notes extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = NotefulContext;

    navigateBack = () => {
        this.props.history.push('/');
    }

    render() {

        let notesResult = this.props.notes.map((note) => {
                return <NotesCard 
                    name={note.name}
                    key={note.id}
                    id={note.id}
                    modified={note.modified}
                    navigateBack={this.navigateBack}
                />
            });

        return (
            <div className="Notes">
                {notesResult}
                <button>
                    <Link to='/addnote'>
                        Add Note
                    </Link>
                </button>
            </div>
        )
    }
}

export default Notes;