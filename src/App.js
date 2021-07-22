import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Admin from './components/Admin';
import './App.css';
import Login from './components/Login';
import CompanyAddOrUpdate from './components/ManageCompanies/CompanyAddOrUpdate';
import CompanyDelete from './components/ManageCompanies/CompanyDelete';
import CompanyLists from './components/ManageCompanies/CompanyLists';
import IpoAddOrUpdate from './components/ManageIPO/IpoAddOrUpdate';
import IpoDelete from './components/ManageIPO/IpoDelete';
import IpoLists from './components/ManageIPO/IpoLists';
import SectorAdd from './components/ManagerSector/SectorAdd';
import SectorLists from './components/ManagerSector/SectorLists';
import StockExchangeAdd from './components/ManageStockExchange/StockExchangeAdd';
import StockExchangeLists from './components/ManageStockExchange/StockExchangeLists';
import SetStockCode from './components/SetStockCode';
import SignUp from './components/SignUp';
import User from './components/User';
import welcome from './components/welcome';
import SheetJSApp from './data/UploadExcel';
import GenerateCharts from './components/Userview/GenerateCharts';
import CompareCompany from './components/Userview/CompareCompany';

function App() {
  return (
    <div className="App">
      <Router>
      
      <div>
      
                    <Switch> 
                          <Route path = "/" exact component = {welcome}></Route>
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
