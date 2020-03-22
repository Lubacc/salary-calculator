import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Cashout from './components/Cashout';
import StartPage from './components/StartPage';

function App() {
  return (
    <Router>
      <div className="container">
        <Switch>
          <Route path="/" exact render={(props) => <StartPage {...props} />} />
          <Route path="/cashout" render={(props) => <Cashout {...props} />} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
