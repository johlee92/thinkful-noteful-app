import React from 'react';
import './Sidebar.css';
import FolderCard from './FolderCard';

class Sidebar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let folder = this.props.folders.map((folder) => {
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