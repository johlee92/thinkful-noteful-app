import React, { Component } from  'react';
import './AddFolder.css';
import NotefulContext from '../App/NotefulContext';

class AddFolder extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
  }
  console.log(props);
}

static contextType = NotefulContext;

nameChange = (name) => {
    this.setState({
        name,
        errorDisplay: 'none'
    })
}

componentDidMount() {
  console.log(this.context);
}

handleSubmit(e) {
  e.preventDefault();
  const {name} = this.state;
  const folderNew = {name};
  const url ='http://localhost:9090/folders';
  
  // correcting for where user enters 
  if (!(folderNew.name.length>1)) {
    this.setState({
      errorDisplay: 'block'
    })
    return;
  }

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
      this.context.dataFetch();
      this.props.history.push('/');
    })
    .catch(err => {
      this.setState({
        error: err.message
      });
    });
}

navigateBack = (e) => {
  e.preventDefault();
  this.props.history.goBack();
}


  render() {
    return (
      <div className="addFolder">
        <h2>Add Folder</h2>
        <form className="addFolder__form" onSubmit={e => this.handleSubmit(e)}>
          <label htmlFor="name">Name:</label>
          <input type="text" name="name" id="name" placeholder="Name" onChange={e => this.nameChange(e.target.value)}/>
          <div className="addFolder__buttons">
            <button onClick={this.navigateBack}>Cancel</button>
            <button type="submit" >Save</button>
            <span style={{display:this.state.errorDisplay, color:'red'}}>Error</span>
          </div>  
        </form>
      </div>
    );
  }
}

export default AddFolder;