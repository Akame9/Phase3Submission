import React, { Component } from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import SheetJSApp from '../data/UploadExcel';
import CompanyAddOrUpdate from './ManageCompanies/CompanyAddOrUpdate';
import CompanyDelete from './ManageCompanies/CompanyDelete';
import CompanyLists from './ManageCompanies/CompanyLists';
import IpoAddOrUpdate from './ManageIPO/IpoAddOrUpdate';
import IpoDelete from './ManageIPO/IpoDelete';
import IpoLists from './ManageIPO/IpoLists';
import SectorAdd from './ManagerSector/SectorAdd';
import SectorLists from './ManagerSector/SectorLists';
import StockExchangeAdd from './ManageStockExchange/StockExchangeAdd';
import StockExchangeLists from './ManageStockExchange/StockExchangeLists';
import SetStockCode from './SetStockCode';




class Admin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

      }

    render() {
        return (
          <Router>
            <div>
              
      <Navbar bg="dark" variant="dark"
        fixed="top" expand="sm" collapseOnSelect>
        <Navbar.Brand>
          
          <img src="https://image.shutterstock.com/z/stock-vector-financial-logo-icon-1013745385.jpg" width="40px" height="40px" style={{marginLeft:"10px"}}/>
          {' '}
          StockMarT
        </Navbar.Brand>

        <Navbar.Toggle className="coloring" />
        <Navbar.Collapse>
          <Nav>
            
            <Nav.Link as={Link} to={"/uploaddata"}>Import Data</Nav.Link>
            <Nav.Link as={Link} to={"/companylists"}>Manage Company</Nav.Link>
            <Nav.Link as={Link} to={"/selists"}>Manage Stock Exchange</Nav.Link>
            <Nav.Link as={Link} to={"/ipolists"}>Manage IPO</Nav.Link>
            <Nav.Link as={Link} to={"/sectorlists"}>Manage Sector</Nav.Link>
            <Nav.Link as={Link} to={"/setstockcode"}>Stock Code</Nav.Link>
            <Button as={Link} to={"/"}variant="outline-light" size='sm' style={{marginLeft : "100px"}}>logout</Button>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      
      </div>
      <div>
      <Switch>
        <Route path="/uploaddata"><SheetJSApp/></Route>

        <Route path = "/ipolists" component = {IpoLists}></Route>
        <Route path = "/add-ipo/:id" component = {IpoAddOrUpdate}></Route>
        <Route path = "/delete-ipo/:id" component = {IpoDelete}></Route>

        <Route path = "/companylists" component = {CompanyLists}></Route>
        <Route path = "/add-company/:id" component = {CompanyAddOrUpdate}></Route>
        <Route path = "/delete-company/:id" component = {CompanyDelete}></Route>

        <Route path = "/selists" component = {StockExchangeLists}></Route>
        <Route path = "/add-se" component = {StockExchangeAdd}></Route>

        <Route path = "/setstockcode" component = {SetStockCode}></Route>
        
        <Route path = "/sectorlists" component = {SectorLists}></Route>
        <Route path = "/add-sector" component = {SectorAdd}></Route>
                    
                          
      </Switch>
      </div>
      </Router>
              );
    }
}

export default Admin;