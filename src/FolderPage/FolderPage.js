import React from 'react';
import Sidebar from '../Other/Sidebar';
import Notes from '../Other/Notes';
import NotefulContext from '../App/NotefulContext';

class FolderPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = NotefulContext;

    render() {
        let folderNotes = this.context.notes.filter((note) => {
            return note.folderId === this.props.match.params.folderId
        })

        return (
            <div className='FolderPage results'>
                <Sidebar/>
                <Notes
                    notes={folderNotes}
                />
            </div>
        )
    }
}

export default FolderPage;