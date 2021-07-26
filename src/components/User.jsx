import React, { Component } from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CompanyDetails from './Userview/CompanyDetails';
import CompareCompany from './Userview/CompareCompany';
import CompareSector from './Userview/CompareSector';
import CompareSectorAndCompany from './Userview/CompareSectorAndCompany';
import IPO from './Userview/IPO';
import LatestStockPrice from './Userview/LatestStockPrice';
import UserProfile from './Userview/UserProfile';



class User extends Component {
    constructor(props) {
        super(props)

        this.state = {

          id: this.props.match.params.id
            
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
            
            <Nav.Link as={Link} to={"/sharelists"}>Latest Shares</Nav.Link>
            <Nav.Link as={Link} to={"/ipos"}>IPOs</Nav.Link>
            <Nav.Link as={Link} to={"/comparecompanies"}>Compare Company</Nav.Link>
            <Nav.Link as={Link} to={"/comparesectors"}>Compare Sector</Nav.Link>
            <Nav.Link as={Link} to={"/comparesectorandcompany"}>Compare Sector And Company</Nav.Link>
            <Button as={Link} to={"/viewprofile/"+this.state.id}variant="outline-light" size='sm' style={{marginLeft : "380px"}}>Profile</Button>
            <Button as={Link} to={"/"}variant="outline-light" size='sm' style={{marginLeft : "10px"}}>logout</Button>

          </Nav>
        </Navbar.Collapse>

      </Navbar>
      
      </div>
      <div>
      <Switch>
      <Route path = "/comparecompanies" component = {CompareCompany}></Route>
      <Route path = "/ipos" component = {IPO}></Route>
      <Route path = "/sharelists" component = {LatestStockPrice}></Route>
      <Route path = "/companydetails/:companyName/:stockExchangeName" component = {CompanyDetails}></Route>
      <Route path = "/comparesectors" component = {CompareSector}></Route> 
      <Route path = "/comparesectorandcompany" component = {CompareSectorAndCompany}></Route> 
      <Route path = "/viewprofile/:id" component = {UserProfile}></Route>
            
      </Switch>
      </div>
      </Router>
          
        );
    }
}

export default User;