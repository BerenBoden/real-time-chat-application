import React from 'react';
//Using react router for page routing functionallity 
import {BrowserRouter as Router, Route} from 'react-router-dom';
//Login/Sign Up form 
import Join from './components/join/Join';
//Chat page, loaded once data is passed from Join component
import Chat from './components/chat/Chat';

import './index.scss';

//Functional component
const App = () => (
    //Adding the page routing functionallity
    <Router>
        {/*Rendering this 'Join' component as soon as the application loads*/}
        <Route exact path="/" component={Join}></Route>
        {/*Data from the 'Join' component will be passed to this component, once data is received, 'Chat' component will be rendered*/}
        <Route path="/chat" component={Chat}></Route>
    </Router>
);

export default App;