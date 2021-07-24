import React, { Component } from 'react';
import { Col,Container,Row, Card } from 'react-bootstrap';


class CompareSector extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            sectorName: '',
            from:'',
            to:'',
            
        }

        this.changesectorNameHandler = this.changesectorNameHandler.bind(this);
        this.changefromHandler = this.changefromHandler.bind(this);
        this.changetoHandler = this.changetoHandler.bind(this);
        this.generateMap = this.generateMap.bind(this);
        this.addMore = this.addMore.bind(this);
        
    }

    componentDidMount(){
        
    }

    changesectorNameHandler= (event) => {
        this.setState({sectorName: event.target.value});
    }

    changefromHandler= (event) => {
        this.setState({from: event.target.value});
    }

    changetoHandler= (event) => {
        this.setState({to: event.target.value});
    }


    generateMap = (e) => {
        e.preventDefault();

    }

    addMore = (e) => {
        e.preventDefault();
							
	}

    render() {
        return (
            <Container style={{marginTop:'80px'}}>
            <Row>
            <Col>
                   <Card >
                            
                                <h3 className='text-center'>Select Sector</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label style={{marginBottom:'5px'}}> Sector Name: </label>
                                            <input placeholder="company name" name="companyName" className="form-control" 
                                                style={{marginBottom:'5px'}} value={this.state.companyName} onChange={this.changecompanyNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{marginBottom:'5px'}}> From : </label>
                                            <input placeholder="from date" name="from" className="form-control" 
                                                style={{marginBottom:'5px'}} value={this.state.from} onChange={this.changefromHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{marginBottom:'5px'}}> To : </label>
                                            <input placeholder="to date" name="to" className="form-control" 
                                                style={{marginBottom:'5px'}} value={this.state.to} onChange={this.changetoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.generateMap} style={{margin:'10px'}}>Generate Map</button>
                                        <button className="btn btn-success" onClick={this.addMore} style={{margin:'10px'}}>Add Company</button>
                                        
                                        
                                    </form>
                                </div>
                    </Card>
                        

                </Col>
            </Row>
            </Container>
        );
    }
}

export default CompareSector;