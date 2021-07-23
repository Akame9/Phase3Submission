import React, { Component } from 'react';
import { Nav, Navbar, Button} from 'react-bootstrap';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';
import CompareCompany from './Userview/CompareCompany';
import IPO from './Userview/IPO';



class User extends Component {
    constructor(props) {
        super(props)

        this.state = {

          id: this.props.match.params.id
            
        }

      }
    
    
    ipo(){
        this.props.history.push('/ipolists');
        
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
            
            <Nav.Link as={Link} to={"/ipos"}>IPOs</Nav.Link>
            <Nav.Link as={Link} to={"/comparecompanies"}>Compare Company</Nav.Link>
            <Nav.Link as={Link} to={"/selists"}>Compare Sector</Nav.Link>
            <Button as={Link} to={"/"}variant="outline-light" size='sm' style={{marginLeft : "400px"}}>logout</Button>
          </Nav>
        </Navbar.Collapse>

      </Navbar>
      
      </div>
      <div>
      <Switch>
      <Route path = "/comparecompanies" component = {CompareCompany}></Route>
      <Route path = "/ipos" component = {IPO}></Route>
      
            
      </Switch>
      </div>
      </Router>
          
        );
    }
}

export default User;