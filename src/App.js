import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import ProfilePage from './scenes/ProfilePage.js';
import Footer from './components/Footer';

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
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
