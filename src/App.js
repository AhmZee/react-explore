import Navbar from './Navbar';
import Home from './Home';
import Destination from './Destination';
import Crew from './Crew';
import Technology from './Technology'

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/destination">
              <Destination />
            </Route>
            <Route path="/crew">
              <Crew />
            </Route>
            <Route path="/technology">
              <Technology />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
