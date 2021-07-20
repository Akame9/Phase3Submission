import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
//import './App.css';
import Login from './components/Login';
import IpoAdd from './components/ManageIPO/IpoAdd';
import IpoLists from './components/ManageIPO/IpoLists';
import SignUp from './components/SignUp';
import User from './components/User';
import welcome from './components/welcome';

function App() {
  return (
    <div className="App">
      <Router>
      
      <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {welcome}></Route>
                          <Route path = "/signup" exact component = {SignUp}></Route>
                          <Route path = "/signin" exact component = {Login}></Route>
                          <Route path = "/user" exact component = {User}></Route>
                          <Route path = "/ipolists" component = {IpoLists}></Route>
                          <Route path = "/add-ipo/:id" component = {IpoAdd}></Route>
    
                    </Switch>
                </div>
      </Router>
      
    </div>
  );
}

export default App;
