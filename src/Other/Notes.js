import React from 'react';
import './Notes.css';
import NotesCard from './NotesCard';
import NotefulContext from '../App/NotefulContext';

class Notes extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = NotefulContext;

    render() {

        let notesResult = this.props.notes.map((note) => {
                return <NotesCard 
                    name={note.name}
                    key={note.id}
                    id={note.id}
                    modified={note.modified}
                />
            });

        return (
            <div className="Notes">
                {notesResult}
                <button>Add Note</button>
            </div>
        )
    }
}

export default Notes;