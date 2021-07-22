import React, { Component } from 'react';
import Setstockcodeservice from '../services/Setstockcodeservice';
import {Card, Button} from 'react-bootstrap';
class SetStockCode extends Component {

    constructor(props) {
        super(props)

        this.state = {
            stockCode: '',
            companyName: '',
            stockExchangeName: ''
        }
        this.changestockExchangeNameHandler = this.changestockExchangeNameHandler.bind(this);
        this.changecompanyNameHandler = this.changecompanyNameHandler.bind(this);
        this.changestockCodeHandler = this.changestockCodeHandler.bind(this);
        this.confirm = this.confirm.bind(this);
        
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

        Setstockcodeservice.addsc(s).then(res => {
            //this.props.history.push('/setstockcode');
            this.setState({
                stockCode: '',
                companyName: '',
                stockExchangeName: ''
            })
        });
    }


    render() {
        return (
            <div className="container" style={{marginTop:"80px"}}>
                
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
                
            </div>
        );
    }
}

export default SetStockCode;