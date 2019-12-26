import React from 'react';
import Sidebar from '../Other/Sidebar';
import Notes from '../Other/Notes';

class AllNotesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='AllNotesPage results'>
                <Sidebar
                    folders={this.props.folders}
                    handleFolder={this.props.handleFolder}
                />
                <Notes
                    notes={this.props.notes}
                    handleNote={this.props.handleNote}
                />
            </div>
        )
    }
}

export default AllNotesPage;