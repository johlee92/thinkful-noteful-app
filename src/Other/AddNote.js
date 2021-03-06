import React, { Component } from  'react';
import './AddNote.css';
import NotefulContext from '../App/NotefulContext';
import config from '../config';

class AddFolder extends Component {

  constructor(props) {
    super(props);
    this.state = {
        name: '',
        content: '',
        folderid: '',
        errorDisplay: 'none',
        errorMessage: ''
    }
  }

  static contextType = NotefulContext;

  nameChange = (name) => {
      if(!name) {
        this.setState({
          errorDisplay: 'block',
          errorMessage: 'name cannot be blank'
        })
      } else {
        this.setState({
          errorDisplay: 'none',
          errorMessage: ''
        })
      }

      this.setState({
          name
      })
  }

  contentChange = (content) => {
    this.setState({
        content
    })
  }

  folderChange = (folder) => {
    console.log(folder)
    const desiredFolder = this.context.folders.find(f => f.name == folder);
    console.log(desiredFolder)
    
    if (!desiredFolder) {
      this.setState({
        errorDisplay: 'block',
        errorMessage: 'Folder does not exist'
      })
    } else {
      this.setState({
        errorDisplay: 'none',
        folderid: desiredFolder.id
      })
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    
    if (!(e.target.folder.value.length>1)) {
      this.setState({
        errorDisplay: 'block',
        errorMessage: 'Must provide an existing folder name'
      })
      return;
    }

    if (this.state.errorDisplay === 'block') {
      const oldErrorMessage = this.state.errorMessage;
      console.log(oldErrorMessage);
      this.setState({
        errorMessage: `${oldErrorMessage}`,
        errorDisplay: 'block'
      });
      return;
    }

    const {name, content, folderid} = this.state;
    const noteNew = {name, content, folderid};
    const url = `${config.API_ENDPOINT}` + '/notes';

    const options = {
      method: 'POST',
      body: JSON.stringify(noteNew),
      headers: {
        "Content-Type": "application/json"
      }
    };

    fetch(url, options)
      .then(res => {
        if(!res.ok) {
          throw new Error('Something went wrong, please try again later');
        }
        return res.json();
      })
      .then(data => {
        this.setState({
            name: '',
            content: '',
            folder: '',
            errorDisplay: 'none'
        });
        this.context.dataFetch();
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          errorMessage: err.message,
          errorDisplay: 'block'
        });
      });
  }

  render() {
    return (
      <div className="addNote">
        <h2>Add Note</h2>
        <form className="addFolder__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="Name" onChange={e => this.nameChange(e.target.value)}/>
          <label htmlFor="folder">Folder:</label>
          <input type="text" name="folder" id="folder" placeholder="Folder" onChange={e => this.folderChange(e.target.value)}/>
          <label htmlFor="content">Content:</label>
          <input type="text" name="content" id="content" placeholder="Content" onChange={e => this.contentChange(e.target.value)}/>
          <div className="addFolder__buttons">
            <button onClick={() => this.props.history.push('/')}>Cancel</button>
            <button type="submit">Save</button>
          </div>
          <span style={{display:this.state.errorDisplay, color:'red'}}>{this.state.errorMessage}</span>  
        </form>
      </div>
    );
  }
}

export default AddFolder;