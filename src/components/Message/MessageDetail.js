import React, { Component } from 'react';
import moment from 'moment';

class MessageDetail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            message: {}
        }
    }
    
    componentDidMount() {
        const { id } = this.props.params;
        fetch(`https://chrisv-test.herokuapp.com/messages/${id}`)
            .then(data => data.json())
            .then(message => {
                this.setState({
                    message
                })
            });
        
    }

    render() {
        const { author, created_at, id, in_reply_to, text, updated_at, utc_offset } = this.state.message;
        // TODO: Implement better way to check this data
        if (!text) {
            return (
                <div>Fetching info</div>
            )
        }
        else {
            return(
                <ul className="message">
                    <li>Author: {author ? author : 'Unknown'}</li>
                    <li>Created: {moment(created_at).format('MMMM Do YYYY, h:mm a')}</li>
                    <li>Message ID: {id}</li>
                    <li>In reply to: {in_reply_to ? in_reply_to : 'N/A'}</li>
                    <li>Updated at: {moment(updated_at).format('MMMM Do YYYY, h:mm a')}</li>
                    <li>UTC Offset: {utc_offset}</li>
                </ul>
            )
        }
    }
}



export default MessageDetail;