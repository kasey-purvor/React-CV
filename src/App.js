import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// components
import Navbar from './components/Navbar';
import ProfilePage from './scenes/ProfilePage.js';
import MyProjectsPage from './scenes/MyProjectsPage.js';
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
          <Route exact path='/projects'>
            <MyProjectsPage/>
          </Route>
        </Switch>
        {/* <Footer/> */}
      </Router>
    </div>
  );
}

export default App;
