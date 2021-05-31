import './App.css';

import Dashboard from './Pages/Main/Dashboard'
import Team from './Pages/Main/Team'

import SignIn from './Pages/Users/SignIn'

import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <main>
      <Switch>

        <Route path="/register">
          <SignIn />
        </Route>

        <Route path="/login">
          <SignIn />
        </Route>

        <Route path="/team">
          <Team />
        </Route>

        <Route path="/">
          <Dashboard />
        </Route>

      </Switch>
    </main>
  );
}

export default App;
