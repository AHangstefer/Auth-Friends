import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch} from "react-router-dom";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./components/Login";
import FriendsList from "./components/FriendsList"
import NewFriend from './components/NewFriend';


function App() {
  return (
    
      <Router>
          <div className = "App">
            <ul>
              <li>
                <Link to="/Login">Login</Link>
              </li>
              <li>
                <Link to= "/friendsList">Friends List</Link>
              </li>
              <li>
                <Link to= "/addFriend">Add Friend</Link>
              </li>
            </ul>
            <Switch>
              <PrivateRoute exact path="/friendsList" component= {FriendsList} />
              <Route exact path="/addFriend" component= {NewFriend} />
              <Route path="/Login" component={Login} />
              <Route component = {Login} />
            </Switch>
          </div>
        
      </Router>
     
   
  );
}

export default App;
