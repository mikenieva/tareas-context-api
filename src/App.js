import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import Tareas from './components/tareas'
import Login from './components/auth/Login'

import TareaState from './context/tareas/TareaState'

function App() {
  return (
    <div className="App">
      <TareaState>
        <Router>
          <Switch>
            <Route exact path="/" component={Login} />
            <Route exact path="/tareas" component={Tareas} />
          </Switch>
        </Router>  
      </TareaState>
    </div>
  );
}

export default App;
