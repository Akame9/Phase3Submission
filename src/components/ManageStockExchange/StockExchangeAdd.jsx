import React, { Component } from 'react';
import SEservices from '../../services/StockExchangeservices';


class StockExchangeAdd extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            stockExchangeName: '',
            stockExchangeBrief: ''
        }
        this.changestockExchangeNameHandler = this.changestockExchangeNameHandler.bind(this);
        this.changestockExchangeBriefHandler = this.changestockExchangeBriefHandler.bind(this);
        this.save = this.save.bind(this);
    }

    changestockExchangeNameHandler= (event) => {
        this.setState({stockExchangeName: event.target.value});
    }

    changestockExchangeBriefHandler= (event) => {
        this.setState({stockExchangeBrief: event.target.value});
    }

    cancel(){
        this.props.history.push('/selists');
    }

    save = (e) => {
        e.preventDefault();
        let s = { stockExchangeName: this.state.stockExchangeName, 
                  stockExchangeBrief: this.state.stockExchangeBrief
                };
        console.log('s => ' + JSON.stringify(s));

        SEservices.addse(s).then(res => {
            this.props.history.push('/selists');
        });
    }


    render() {
        return (
            
                   <div className = "container" style={{marginTop:'80px'}}>
                        
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">New Stock Exchange</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Stock Exchange Name: </label>
                                            <input placeholder="stock exchange" name="stockExchangeName" className="form-control" 
                                                value={this.state.stockExchangeName} onChange={this.changestockExchangeNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="description" name="stockExchangeBrief" className="form-control" 
                                                value={this.state.stockExchangeBrief} onChange={this.changestockExchangeBriefHandler}/>
                                            
                                        </div>

                                        <button className="btn btn-success" onClick={this.save} style={{marginTop:"10px"}}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "390px",marginTop:"10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   
                
            
        );
    }
}

export default StockExchangeAdd;