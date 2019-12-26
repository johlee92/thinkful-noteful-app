import React from 'react';
import './Notes.css';
import NotesCard from './NotesCard';

class Notes extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {

        let notesResult = this.props.notes.map((note) => {
                return <NotesCard 
                    name={note.name}
                    key={note.id}
                    id={note.id}
                    modified={note.modified}
                    handleNote={this.props.handleNote}/>
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