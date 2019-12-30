import React from 'react';
import './Sidebar.css';
import FolderCard from './FolderCard';
import NotefulContext from '../App/NotefulContext';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = NotefulContext;

    render() {
        let folder = this.context.folders.map((folder) => {
            return <FolderCard name={folder.name} id={folder.id} handleFolder={this.props.handleFolder}/>
        });

        return (
            <div className="Sidebar">
                {folder}
                <button>Add Folder</button>
            </div>
        )
    }
}

export default Sidebar;