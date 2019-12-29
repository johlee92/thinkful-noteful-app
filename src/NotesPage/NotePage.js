import React from 'react';
import NotesCard from '../Other/NotesCard';
import dummyStores from '../dummy-store';
import './NotePage.css';

class NotePage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    navigateBack = () => {
        this.props.history.goBack();
    }

    render() {
        const specificNote = dummyStores.notes.find((note) =>
            note.id === this.props.match.params.noteId
        )

        const specificFolder = dummyStores.folders.find((folder) =>
            folder.id === specificNote.folderId
        )
        
        return (
            <div className='NotePage'>
                <div style={{display:'inline-block'}}>
                    <button onClick={this.navigateBack} style={{cursor:'pointer'}}>Go Back</button>
                    <p>Folder: {specificFolder.name}</p>
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