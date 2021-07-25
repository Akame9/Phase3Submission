import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin';
import './App.css';
import welcome from './components/welcome';
import Login from './components/Login';
import SignUp from './components/SignUp';
import User from './components/User';
import welcome1 from './components/welcome1';

function App() {
  return (
    <div className="App">
      <Router>
      
      <div>
      
                    <Switch> 
                          <Route path = "/" exact component = {welcome1}></Route>
                          <Route path = "/signup" exact component = {SignUp}></Route>
                          <Route path = "/signin" exact component = {Login}></Route>
                          <Route path = "/user/:id" exact component = {User}></Route>
                          <Route path = "/admin" component = {Admin}></Route>
                             
                    </Switch>
                  
                </div>
      </Router>
      
    </div>
  );
}

export default App;
