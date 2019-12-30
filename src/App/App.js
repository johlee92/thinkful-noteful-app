import React from 'react';
import Nav from '../Nav/Nav';
import './App.css';
import dummyStores from '../dummy-store';
import { Route } from 'react-router-dom';
import AllNotesPage from '../AllNotesPage/AllNotesPage';
import FolderPage from '../FolderPage/FolderPage';
import NotePage from '../NotesPage/NotePage';
import NotefulContext from './NotefulContext';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state={
      folders: dummyStores.folders,
      notes: dummyStores.notes,
      folder: 'b0715efe-ffaf-11e8-8eb2-f2801f1b9fd1',
      note: 'cbc787a0-ffaf-11e8-8eb2-f2801f1b9fd1'
    }
  }

  setFolder = (folder) => {
    this.setState({
      folder
    })
  };

  setNote = (note) => {
    this.setState({
      note
    })
  }

  render() {

    const contextValue = {
      folders: this.state.folders,
      notes: this.state.notes,
      // addFolder: () => {},
      // deleteNote: () => {},
      setFolder: this.setFolder,
      setNote: this.setNote,
    }

    return(
      <main className='App'>
        <NotefulContext.Provider value={contextValue}>
          <Nav />
          <Route
            exact path ='/'
            component={AllNotesPage}
            // render={(routerProps) => 
            //   <AllNotesPage 
            //     folders={this.state.folders}
            //     notes={this.state.notes}
            //     handleFolder={this.setFolder}
            //     handleNote={this.setNote}
            //     {...routerProps}
            //   />}
          />
          <Route
            path='/folder/:folderId'
            component={FolderPage}
            // render={(routerProps) =>
            //   <FolderPage
            //     folders={this.state.folders}
            //     notes={this.state.notes}
            //     handleFolder={this.setFolder}
            //     handleNote={this.setNote}
            //     {...routerProps}
            //   />}
          />
          <Route
            path='/note/:noteId'
            component={NotePage}
            // render={(routerProps) =>
            //   <NotePage
            //     folders={this.state.folders}
            //     notes={this.state.notes}
            //     handleNote={this.setNote}
            //     {...routerProps}
            //   />}
          />
        </NotefulContext.Provider>
      </main>
    )
  }
}

export default App;