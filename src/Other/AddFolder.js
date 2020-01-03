import React, { Component } from  'react';
import './AddFolder.css';

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
  }
}

nameChange = (name) => {
    this.setState({
        name
    })
}

handleSubmit(e) {
  e.preventDefault();
  const {name} = this.state;
  const folderNew = {name};
  const url ='http://localhost:9090/folders';
  
  const options = {
    method: 'POST',
    body: JSON.stringify(folderNew),
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
          name: ''
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
      <div className="addFolder">
        <h2>Add Folder</h2>
        <form className="addFolder__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="Name" onChange={e => this.nameChange(e.target.value)}/>
          <div className="addFolder__buttons">
            <button onClick={() => this.props.history.push('/')}>Cancel</button>
            <button type="submit" >Save</button>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddFolder;