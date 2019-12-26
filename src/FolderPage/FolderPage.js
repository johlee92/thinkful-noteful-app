import React from 'react';
import Sidebar from '../Other/Sidebar';
import Notes from '../Other/Notes';
import dummyStores from '../dummy-store';

class FolderPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    render() {
        let folderNotes = dummyStores.notes.filter((note) => {
            return note.folderId === this.props.match.params.folderId
        })

        return (
            <div className='FolderPage results'>
                <Sidebar
                    folders={this.props.folders}
                    handleFolder={this.props.handleFolder}
                />
                <Notes
                    notes={folderNotes}
                    handleNote={this.props.handleNote}
                />
            </div>
        )
    }
}

export default FolderPage;