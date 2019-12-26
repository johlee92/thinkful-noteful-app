import React from 'react';
import NotesCard from '../Other/NotesCard';
import dummyStores from '../dummy-store';

class NotePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        const specificNote = dummyStores.notes.find((note) =>
            note.id === this.props.match.params.noteId
        )
        
        console.log()

        // let specificNote = dummyStores.notes.filter((note) => {
        //     return note.id === this.state.note
        // })
          
        return (
            <div className='NotePage'>
                <div>
                    <p>Go Back</p>
                    {specificNote.folderId}
                </div>
                <NotesCard
                    name={specificNote.name}
                    key={specificNote.id}
                    id={specificNote.id}
                    modified={specificNote.modified}
                    handleNote={this.props.handleNote}/>
                <p>{specificNote.content}</p>
            </div>
        )
    }
}

export default NotePage;