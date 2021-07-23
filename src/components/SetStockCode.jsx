import React, { Component } from 'react';
import Setstockcodeservice from '../services/Setstockcodeservice';
import {Card, Button, Table, Container,Row,Col} from 'react-bootstrap';
class SetStockCode extends Component {

    constructor(props) {
        super(props)

        this.state = {
            sc: [],
            stockCode: '',
            companyName: '',
            stockExchangeName: ''
        }
        this.changestockExchangeNameHandler = this.changestockExchangeNameHandler.bind(this);
        this.changecompanyNameHandler = this.changecompanyNameHandler.bind(this);
        this.changestockCodeHandler = this.changestockCodeHandler.bind(this);
        this.confirm = this.confirm.bind(this);
        this.getSC = this.getSC.bind(this);
        
    }

    componentDidMount(){
        Setstockcodeservice.getsc().then(res => {
            console.log(res);
            this.setState({sc:res.data});
        });
    }

    changestockExchangeNameHandler= (event) => {
        this.setState({stockExchangeName: event.target.value});
    }

    changecompanyNameHandler= (event) => {
        this.setState({companyName: event.target.value});
    }

    changestockCodeHandler= (event) => {
        this.setState({stockCode: event.target.value});
    }

    confirm = (e) => {
        e.preventDefault();
        let s = { stockExchangeName: this.state.stockExchangeName, 
                  companyName: this.state.companyName,
                  stockCode: this.state.stockCode
                };
        console.log('s => ' + JSON.stringify(s));

        Setstockcodeservice.addsc(s).then(res =>{
            console.log(res);
            this.setState({
                stockCode: '',
                companyName: '',
                stockExchangeName: ''});
        });

        
    }

    getSC(){
        Setstockcodeservice.getsc().then(res => {
            console.log(res);
            this.setState({sc:res.data});
        });

    }


    render() {
        return (
            <Container style={{marginTop:"80px"}}>
                <Row>
                    <Col xs={4}>
                    <Card style={{width:"18rem"}}>
                <h3 className="text-center">Set Stock Code</h3>
                <div class="form-group mx-sm-3 mb-2">
                <input placeholder="stock code" name="stockCodeName" className="form-control" 
                value={this.state.stockCode} onChange={this.changestockCodeHandler}/>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <input placeholder="company" name="companyName" className="form-control" 
                    value={this.state.companyName} onChange={this.changecompanyNameHandler}/>
                </div>
                <div class="form-group mx-sm-3 mb-2">
                    <input placeholder="stock exchange" name="stockExchangeName" className="form-control" 
                    value={this.state.stockExchangeName} onChange={this.changestockExchangeNameHandler}/>
                </div>
                    <Button onClick={this.confirm} style={{margin:'15px'}}>Confirm</Button>
                </Card>
                
                </Col>

                <Col xs={6}>
                <Button onClick={this.getSC}>Refresh</Button>
                <Table striped bordered hover variant="dark">
                    <thead>
                        <tr>
                        <th>#</th>
                        <th>Stock Code</th>
                        <th>Company</th>
                        <th>Stock Exchange</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.state.sc.map(
                            (s,i) =>
                            <tr>
                                <td>{i+1}</td>
                                <td>{s.stockCode}</td>
                                <td>{s.companyName}</td>
                                <td>{s.stockExchangeName}</td>
                            </tr>
                        )
                        
                        }  
                    </tbody>
                    </Table>
                
                
                </Col>
                </Row>
                
                
            </Container>
        );
    }
}

export default SetStockCode;