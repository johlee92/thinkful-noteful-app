import React from 'react';
import './NotesCard.css';
import {Route, Link} from 'react-router-dom';
import Moment from 'react-moment';
import NotefulContext from '../App/NotefulContext';
import config from '../config';

class NotesCard extends React.Component {
    constructor(props) {
        super(props);
    }

    static contextType = NotefulContext;

    handleDelete(e, target) {
        e.preventDefault();

        const url = `${config.API_ENDPOINT}`;
        const options = {
          method: 'DELETE',
          headers: {
            "Content-Type": "application/json"
          }
        };

        fetch(url+'/notes/'+target, options)
          .then(res => {
            if(!res.ok) {
              throw new Error('Something went wrong, please try again later');
            }
            return res;
          })
          .then(res => {
            this.props.navigateBack()
            this.context.dataFetch();
          })
          .catch(err => {
            this.context.dataFetch();
            this.setState({
              error: err.message
            });
          });
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