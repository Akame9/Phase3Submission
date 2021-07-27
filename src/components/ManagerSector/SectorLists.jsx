import React, { Component } from 'react';
import Sectorservice from '../../services/Sectorservice';
import {Button, Card, Container, Row, Col} from 'react-bootstrap';

class SectorLists extends Component {
    constructor(props) {
        super(props)

        this.state = {
            token: this.props.match.params.token,
            se: []
        }

        this.addse = this.addse.bind(this);
      }

      componentDidMount(){
        Sectorservice.getse(this.state.token).then((res) => {
            this.setState({ se: res.data});
        });
    }

    addse(){
        this.props.history.push('/add-sector/'+this.state.token);
    }


    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop:'80px'}}>Sectors</h2>
                <Button onClick={this.addse} size='sm' style={{margin:'10px',marginLeft:'50px'}}> New Sector</Button>
                <Container>
                    <Row>
                    {
                        this.state.se.map(
                            se =>
                            <Col xs={4} >
                            
                            <Card bg='dark' text='white' style={{width:'18rem',margin:'10px'}}>
                                <Card.Header><h3>{se.sectorName}</h3></Card.Header>
                                <Card.Body>{se.sectorBrief}</Card.Body>
                            </Card>
                            </Col> 

                        )
                        

                    }                
                 </Row>
                </Container>
                  
            </div>
        );
    }
}

export default SectorLists;