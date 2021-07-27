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

          token: this.props.match.params.token
            
        }

      }

    welcomepage(){
        this.props.history.push('/');
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
            
            <Nav.Link as={Link} to={"/uploaddata/"+this.state.token}>Import Data</Nav.Link>
            <Nav.Link as={Link} to={"/companylists/"+this.state.token}>Manage Company</Nav.Link>
            <Nav.Link as={Link} to={"/selists/"+this.state.token}>Manage Stock Exchange</Nav.Link>
            <Nav.Link as={Link} to={"/ipolists/"+this.state.token}>Manage IPO</Nav.Link>
            <Nav.Link as={Link} to={"/sectorlists/"+this.state.token}>Manage Sector</Nav.Link>
            <Nav.Link as={Link} to={"/setstockcode/"+this.state.token}>Stock Code</Nav.Link>
            <Button variant="outline-light" size='sm' style={{marginLeft : "100px"}} onClick={this.welcomepage.bind(this)} >logout</Button>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      
      </div>
      <div>
      <Switch>
        <Route path="/uploaddata/:token" component = {SheetJSApp}></Route>

        <Route path = "/ipolists/:token" component = {IpoLists}></Route>
        <Route path = "/add-ipo/:id/:token" component = {IpoAddOrUpdate}></Route>
        <Route path = "/delete-ipo/:id/:token" component = {IpoDelete}></Route>

        <Route path = "/companylists/:token" component = {CompanyLists}></Route>
        <Route path = "/add-company/:id/:token" component = {CompanyAddOrUpdate}></Route>
        <Route path = "/delete-company/:id/:token" component = {CompanyDelete}></Route>

        <Route path = "/selists/:token" component = {StockExchangeLists}></Route>
        <Route path = "/add-se/:token" component = {StockExchangeAdd}></Route>

        <Route path = "/setstockcode/:token" component = {SetStockCode}></Route>
        
        <Route path = "/sectorlists/:token" component = {SectorLists}></Route>
        <Route path = "/add-sector/:token" component = {SectorAdd}></Route>
                    
                          
      </Switch>
      </div>
      </Router>
              );
    }
}

export default Admin;