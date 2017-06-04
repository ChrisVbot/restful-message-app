import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import MessageList from './components/Message/MessageList'
import MessageDetail from './components/Message/MessageDetail';
import NewMessage from './components/Message/NewMessage';

import App from './App';

const Routes = (props) => (
    <Router {...props}>
        <Route path="/" component ={App} >
            <IndexRoute component={MessageList}/>
            <Route path="/messages/new" component={NewMessage}/>
            <Route path="/messages/:id" component={MessageDetail} />
        </Route>        
    </Router>
);

export default Routes;