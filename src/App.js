import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import ProfilePage from './scenes/ProfilePage.js'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/'>
            <ProfilePage/>
    
          </Route> 
        </Switch>
      </Router>
    </div>
  );
}

export default App;
