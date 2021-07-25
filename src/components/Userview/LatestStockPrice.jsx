import React, { Component } from 'react';
import {Table, Form, Button, FormControl,Nav} from 'react-bootstrap';
import { AutoComplete } from "@react-md/autocomplete";
import Stockpriceservices from '../../services/Stockpriceservices';
import Companyservices from '../../services/Companyservices';

class LatestStockPrice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lsp: [],
            search: '',
            companylist: []
        }

        this.companydetails = this.companydetails.bind(this);
        this.handleSearchChange = this.handleSearchChange.bind(this);
        this.searchForCompany = this.searchForCompany.bind(this);
     
        
    }

    componentDidMount(){
        Stockpriceservices.getlatestsp().then(res => {
            console.log(res);
            this.setState({lsp:res.data});
            res.data.forEach((value, key) => {
                this.state.companylist.push(
                    res.data[key].companyName
                );
            });
        });
        console.log(this.state.companylist);
    }

    companydetails(companyName,stockExchangeName){
        this.props.history.push(`/companydetails/${companyName}/${stockExchangeName}`);

    }

    handleSearchChange = (event) => {
        this.setState({search : event.target.value});
    }

    
    searchForCompany = (e) => {
        e.preventDefault();
        Companyservices.getlateststockpriceforcompany(this.state.search).then(res =>{
            this.setState({lsp:res.data})
        });
    }

    render() {
        return (
        
            <div className="container" style={{marginTop:'80px'}}>
                <h3 className="text-center">Latest Shares</h3>
                <Form className="d-flex" style={{width:'18rem',marginBottom:'10px'}}>
                
                <AutoComplete
                    data={this.state.companylist}
                    label="search company"
                    clear
                    id="input"
                    //value={this.state.search}
                    onChange={this.handleSearchChange}
                    />
                
                <Button variant="outline-success" onClick={this.searchForCompany}>Search</Button>
                </Form>
                <Table striped bordered hover >
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Company</th>
                        <th>Latest</th>
                        <th>Stock Exchange</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.lsp.map(
                            (s,i) =>
                            <tr>
                                <td>{i+1}</td>
                                <td><Nav.Link onClick={ () => this.companydetails(s.companyName,s.stockExchangeName)}>{s.companyName}</Nav.Link></td>
                                <td>{s.sharePrice}</td>
                                <td>{s.stockExchangeName}</td>
                            </tr>
                        )
                        
                        }  
                    </tbody>
                    </Table>
                          
                    
                
            </div>
            
        );
    }
}

export default LatestStockPrice;