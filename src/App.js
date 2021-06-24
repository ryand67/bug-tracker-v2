import './App.css';

import Home from './components/Home';
import Credentials from './components/Credentials';

import { auth } from './util/firebase';
import { useAuthState } from 'react-firebase-hooks/auth'

function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      {user ? <Home /> : <Credentials />}
    </div>
  );
}

export default App;
