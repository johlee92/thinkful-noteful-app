import React from 'react';
import './NotesCard.css';
import {Route, Link} from 'react-router-dom';
import Moment from 'react-moment';
import NotefulContext from '../App/NotefulContext';

class NotesCard extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = NotefulContext;

    handleDelete(e, target) {
        e.preventDefault();

        const url ='http://localhost:9090/notes';
        const options = {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json"
          }
        };

        fetch(url+'/'+target, options)
          .then(res => {
            if(!res.ok) {
              throw new Error('Something went wrong, please try again later');
            }
            return res.json();
          })
          .then(data => {
            //navigating back to home page by passing over props function from parent
            this.props.navigateBack();
          })
          .catch(err => {
            this.setState({
              error: err.message
            });
          });
          this.context.dataFetch();
      }

    render() {
        return (
            <div 
                className="NotesCard"
                key={this.props.id}
                id={this.props.id}
            >
                <Link to={`/note/${this.props.id}`}>
                    {this.props.name}
                </Link>
                <Moment format="YYYY/MM/DD">
                    {this.props.modified}
                </Moment>
                <button onClick={(e) => this.handleDelete(e, this.props.id)}>Delete</button>
            </div>
        )
    }
}

export default NotesCard;