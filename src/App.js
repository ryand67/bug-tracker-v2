import './App.css';

import Home from './components/Home';
import Credentials from './components/Credentials';
import Nav from './components/Nav';

import { auth } from './util/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <Route exact path='/'>
            {user ? <Home /> : <Credentials />}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
