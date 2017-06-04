import React, { Component } from 'react';
import { Link } from 'react-router';
import moment from 'moment';

import './message.css';

class MessageList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            messages: {},
            results: []
        }
        this.handleDelete = this.handleDelete.bind(this);
    }
    componentDidMount() {
        //TODO: Implement way to manage pagination with results and error handling
        fetch('https://chrisv-test.herokuapp.com/messages/')
            .then(data => data.json())
            .then(messages => {
                this.setState({
                    messages,
                    results: messages.results
                });
            });
    }

    //TODO: Implement error handling
    handleDelete(messageID) {
        fetch(`https://chrisv-test.herokuapp.com/messages/${messageID}`, {
            method: 'DELETE',
        }).then(response => this.removeDeletedMessages(messageID));
    }

    removeDeletedMessages(messageID) {
        // Filters out the deleted message and sets state with filtered result
        const filteredMessages = this.state.messages.results.filter((message) => 
            message.id !== messageID
        );
        this.setState({
            results: filteredMessages
        });
    }

    render() {
        if (!this.state.results) {
            return (
                <div>Awaiting messages</div>
            )
        } else {
            return (
                <div className="message-list">
                    {this.state.results.map((message) => {
                        return (
                            <div className="message-item" key={message.id}>
                                <p>{message.text}</p>
                                Posted at:
                                <p>
                                    {formatDate(message.created_at)}
                                </p>
                                <p>
                                    <Link to={`/messages/${message.id}`}>Click for details</Link>
                                </p>
                                <button className="delete-button" onClick={() => {
                                    this.handleDelete(message.id)}}>Delete</button>
                            </div>)
                    })}
                </div>
            )
        }
       
    }
}

// Helper function to format date
function formatDate(date) {
    return moment(date).format('MMMM Do YYYY, h:mm a');
}

export default MessageList;