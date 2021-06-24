import './App.css';

import Home from './components/Home';
import Credentials from './components/Credentials';

import { auth } from './util/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'
import { BrowserRouter as Router, Link, Switch, Route } from 'react-router-dom'

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Home /> : <Credentials />}
    </div>
  );
}

export default App;
