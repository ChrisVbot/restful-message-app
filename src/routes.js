import React from 'react';
import { Router, Route, IndexRoute } from 'react-router';
import MessageList from './components/MessageList'
import MessageDetail from './components/MessageDetail';
import NewMessage from './components/NewMessage';

import App from './App';
// import MessageDetail from './components/MessageDetail';

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