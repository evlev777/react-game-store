import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import {HomePage} from './pages/home-page'


function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
            <Route path="/">
              <HomePage />
            </Route>
        </Switch>
      </div>
    </Router>
    
  );
}

export default App;
