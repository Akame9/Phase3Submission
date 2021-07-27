import React, { Component } from 'react';
import Iposervices from '../../services/Iposervices';
import {Button,Container,Col,Row} from 'react-bootstrap';
//import moment from 'moment';


class IPO extends Component {
    constructor(props) {
        super(props)

        this.state = {
            token: this.props.match.params.token,
            ipos: [],
            from: '',
            to: ''
        }

        this.changefromHandler = this.changefromHandler.bind(this);
        this.changetodateHandler = this.changetodateHandler.bind(this);
        this.getipos = this.getipos.bind(this)

      }

    componentDidMount(){
        if(this.state.from.length==0 || this.state.to.length==0 ){
            Iposervices.getipos(this.state.token).then((res) => {
                //console.log('Hello')
                this.setState({ ipos: res.data});
            });
        }
        
    }

    changefromHandler= (event) => {
        this.setState({from: event.target.value});
        
    }
    changetodateHandler= (event) => {
        this.setState({to: event.target.value});
        
    }

    getipos = (e) => {
        e.preventDefault();
        
        
        Iposervices.getipofromto(this.state.from,this.state.to,this.state.token).then(res =>{
            console.log(res)
            this.setState({ ipos: []});
            this.setState({ ipos: res.data});
        })
        
        
    }

    render() {
        return (
            <div>
                 <h2 className="text-center" style={{marginTop:'80px'}}>IPO List</h2> 
                <div className = "container">
                <Container>
                    <Row>
                        <Col>
                        <label>From</label>
                        <input type="text" placeholder="from date" onChange={this.changefromHandler}/>
                
                        </Col>
                        <Col>
                        <label>To</label>
                        <input type="text" placeholder="to date" onChange={this.changetodateHandler}/>
                
                        </Col>
                        <Col>
                        <Button onClick={this.getipos}>Get IPOs</Button>
                        </Col>
                    </Row>
                </Container>

                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Company Name</th>
                                    <th> Price/Share</th>
                                    <th> Total Shares</th>
                                    <th> Open Date </th>
                                    <th> Open Time</th>
                                    <th> Stock Exchanges</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.ipos.map(
                                        ipo => ipo.stockexchange.map(
                                            se =>
                                            <tr key = {ipo.id}>
                                             <td> { ipo.companyName} </td>   
                                             <td> {ipo.pricePerShare}</td>
                                             <td> {ipo.totalNumberOfShare}</td>
                                             <td> {ipo.date}</td>
                                             <td> {ipo.time}</td>
                                             <td> {se.stockExchangeName}</td>
                                             
                                        </tr>

                                        )
                                    )
                                }
                            </tbody>
                        </table>

                 </div>
                
            </div>
        );
    }
}

export default IPO;