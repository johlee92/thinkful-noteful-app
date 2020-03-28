import React from 'react';
import NotesCard from '../Other/NotesCard';
import './NotePage.css';
import NotefulContext from '../App/NotefulContext';

class NotePage extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = NotefulContext;

    navigateBack = () => {
        this.props.history.push('/');
    }

    render() {
        let specificNote;
        let specificFolder;

        specificNote = this.context.notes.find((note) =>
            note.id === parseInt(this.props.match.params.noteId, 10) || note.id === this.props.match.params.noteId
        )
        specificFolder = this.context.folders.find((folder) =>
            folder.id === parseInt(specificNote.folderId, 10) || folder.id === specificNote.folderId
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
                    navigateBack={this.navigateBack}
                />
                <p>{specificNote.content}</p>
            </div>
        )
    }
}

export default NotePage;