import React from 'react';
import Sidebar from '../Other/Sidebar';
import Notes from '../Other/Notes';
import NotefulContext from '../App/NotefulContext';

class AllNotesPage extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = NotefulContext;

    render() {
        return (
            <div className='AllNotesPage results'>
                <Sidebar/>
                <Notes
                    notes={this.context.notes}
                />
            </div>
        )
    }
}

export default AllNotesPage;