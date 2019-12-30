import React from 'react';
import NotesCard from '../Other/NotesCard';
import './NotePage.css';

class NotePage extends React.Component {
    constructor(props) {
        super(props);
    }

    navigateBack = () => {
        this.props.history.push('/');
    }

    render() {
        const specificNote = this.props.notes.find((note) =>
            note.id === this.props.match.params.noteId
        )

        const specificFolder = this.props.folders.find((folder) =>
            folder.id === specificNote.folderId
        )
        
        return (
            <div className='NotePage'>
                <div>
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