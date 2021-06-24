import './App.css';

import Home from './components/Home';
import Credentials from './components/Credentials';
import Nav from './components/Nav';
import NewPostForm from './components/NewPostForm';

import { auth } from './util/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  const [user, loading] = useAuthState(auth);

  return (
    <div className="App">
      <Router>
        <Nav />

        <Switch>
          <Route exact path='/'>
            {user ? <Home /> : <Credentials />}
          </Route>
          
          <Route exact path='/new-bug'>
            {user ? <NewPostForm /> : () => window.location.replace('/')}
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
