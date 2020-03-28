import React from 'react';
import Sidebar from '../Other/Sidebar';
import Notes from '../Other/Notes';
import NotefulContext from '../App/NotefulContext';

class FolderPage extends React.Component {
    constructor(props) {
        super(props);
        console.log(props);
    }

    static contextType = NotefulContext;

    render() {
        let folderNotes = this.context.notes.filter((note) => {
            if (typeof note.folderId === 'number') {
                return note.folderId === parseInt(this.props.match.params.folderId, 10)
            } else  {
                return note.folderId === this.props.match.params.folderId
            }
        })
        console.log(folderNotes);

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