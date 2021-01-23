import React from 'react';

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

import Footer from './components/Footer';
import Header from './components/Header';
import Week from './pages/Week/Week';

function App() {
  return (
    <div className="App">
      <Router>
      <Header />
      <Switch>
        <Route path="/week">
            <Week />
        </Route>
      </Switch> 
      </Router>
      
      <Footer />
    </div>
  );
}

export default App;
