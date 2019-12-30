import React from 'react';
import Nav from '../Nav/Nav';
import './App.css';
import dummyStores from '../dummy-store';
import { Route } from 'react-router-dom';
import AllNotesPage from '../AllNotesPage/AllNotesPage';
import FolderPage from '../FolderPage/FolderPage';
import NotePage from '../NotesPage/NotePage';

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

    return(
      <main className='App'>
        <Nav />
        <Route
          exact path ='/'
          render={(routerProps) => 
            <AllNotesPage 
              folders={this.state.folders}
              notes={this.state.notes}
              handleFolder={this.setFolder}
              handleNote={this.setNote}
              {...routerProps}
            />}
        />
        <Route
          path='/folder/:folderId'
          render={(routerProps) =>
            <FolderPage
              folders={this.state.folders}
              notes={this.state.notes}
              handleFolder={this.setFolder}
              handleNote={this.setNote}
              {...routerProps}
            />}
        />
        <Route
          path='/note/:noteId'
          render={(routerProps) =>
            <NotePage
              folders={this.state.folders}
              notes={this.state.notes}
              handleNote={this.setNote}
              {...routerProps}
            />}
        />
      </main>
    )
  }
}

export default App;