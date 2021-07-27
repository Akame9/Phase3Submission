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
import welcome1 from './welcome1';



class User extends Component {
    constructor(props) {
        super(props)

        this.state = {

          token: this.props.match.params.token,
          id: this.props.match.params.id
            
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
            
            <Nav.Link as={Link} to={"/sharelists/"+this.state.token}>Latest Shares</Nav.Link>
            <Nav.Link as={Link} to={"/ipos/"+this.state.token}>IPOs</Nav.Link>
            <Nav.Link as={Link} to={"/comparecompanies/"+this.state.token}>Compare Company</Nav.Link>
            <Nav.Link as={Link} to={"/comparesectors/"+this.state.token}>Compare Sector</Nav.Link>
            <Nav.Link as={Link} to={"/comparesectorandcompany/"+this.state.token}>Compare Sector And Company</Nav.Link>
            <Button as={Link} to={"/viewprofile/"+this.state.id+"/"+this.state.token}variant="outline-light" size='sm' style={{marginLeft : "80px"}} >Profile</Button>
            <Button variant="outline-light" size='sm' style={{marginLeft : "10px"}} onClick={this.welcomepage.bind(this)} >logout</Button>

          </Nav>
        </Navbar.Collapse>

      </Navbar>
      
      </div>
      <div>
      <Switch>
      <Route path = "/comparecompanies/:token" component = {CompareCompany}></Route>
      <Route path = "/ipos/:token" component = {IPO}></Route>
      <Route path = "/sharelists/:token" component = {LatestStockPrice}></Route>
      <Route path = "/companydetails/:companyName/:stockExchangeName/:token" component = {CompanyDetails}></Route>
      <Route path = "/comparesectors/:token" component = {CompareSector}></Route> 
      <Route path = "/comparesectorandcompany/:token" component = {CompareSectorAndCompany}></Route> 
      <Route path = "/viewprofile/:id/:token" component = {UserProfile}></Route>

      
            
      </Switch>
      </div>
      </Router>
          
        );
    }
}

export default User;