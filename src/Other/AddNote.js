import React, { Component } from  'react';
import './AddNote.css';

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
        name: '',
        content: '',
        // hardcoding folderId for now to check functionality
        folderId: 'b07161a6-ffaf-11e8-8eb2-f2801f1b9fd1'
    }
  }

  nameChange = (name) => {
      this.setState({
          name
      })
  }

  contentChange = (content) => {
    this.setState({
        content
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const {name, content, folderId} = this.state;
    const noteNew = {name, content, folderId};
    const url ='http://localhost:9090/notes';
    console.log(JSON.stringify(noteNew))
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
            content: ''
        });
        this.props.history.push('/');
      })
      .catch(err => {
        this.setState({
          error: err.message
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
          <input type="text" name="folder" id="folder" placeholder="Folder"/>
          <label htmlFor="content">Content:</label>
          <input type="text" name="content" id="content" placeholder="Content" onChange={e => this.contentChange(e.target.value)}/>
          <div className="addFolder__buttons">
            <button onClick={() => this.props.history.push('/')}>Cancel</button>
            <button type="submit">Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddFolder;