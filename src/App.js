import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import './App.css';
import IpoAdd from './components/ManageIPO/IpoAdd';
import IpoLists from './components/ManageIPO/IpoLists';

function App() {
  return (
    <div className="App">
      <Router>
      <div className="container">
                    <Switch> 
                          <Route path = "/" exact component = {IpoLists}></Route>
                          <Route path = "/ipolists" component = {IpoLists}></Route>
                          <Route path = "/add-ipo/:id" component = {IpoAdd}></Route>
    
                    </Switch>
                </div>
      </Router>
      
    </div>
  );
}

export default App;
