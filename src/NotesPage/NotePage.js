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
        const specificNote = this.context.notes.find((note) =>
            note.id === this.props.match.params.noteId
        )
        console.log(specificNote);

        const specificFolder = this.context.folders.find((folder) =>
            folder.id === specificNote.folderId
        )
        console.log(specificFolder);
        
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
                />
                <p>{specificNote.content}</p>
            </div>
        )
    }
}

export default NotePage;