import React, { Component } from 'react';
import {Table, Form, Button, FormControl,Nav} from 'react-bootstrap';
import Stockpriceservices from '../../services/Stockpriceservices';

class LatestStockPrice extends Component {
    constructor(props) {
        super(props)

        this.state = {
            lsp: []
        }

        this.companydetails = this.companydetails.bind(this);
     
        
    }

    componentDidMount(){
        Stockpriceservices.getlatestsp().then(res => {
            console.log(res);
            this.setState({lsp:res.data});
        });
    }

    companydetails(companyName,stockExchangeName){
        this.props.history.push(`/companydetails/${companyName}/${stockExchangeName}`);

    }

    render() {
        return (
        
            <div className="container" style={{marginTop:'80px'}}>
                <h3 className="text-center">Latest Shares</h3>
                <Form className="d-flex" style={{width:'18rem',marginBottom:'10px'}}>
                <FormControl
                    type="search"
                    placeholder="Search"
                    className="mr-2"
                    aria-label="Search"
                />
                <Button variant="outline-success">Search</Button>
                </Form>
                <Table striped bordered hover variant="dark">
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