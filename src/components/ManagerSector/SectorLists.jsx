import React, { Component } from 'react';
import Sectorservice from '../../services/Sectorservice';
import {Button} from 'react-bootstrap';

class SectorLists extends Component {
    constructor(props) {
        super(props)

        this.state = {
                se: []
        }

        this.addse = this.addse.bind(this);
      }

      componentDidMount(){
        Sectorservice.getse().then((res) => {
            this.setState({ se: res.data});
        });
    }

    addse(){
        this.props.history.push('/add-sector');
    }


    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop:'80px'}}>Sectors</h2>
                <Button onClick={this.addse} size='sm' style={{margin:'10px',marginLeft:'50px'}}> New Sector</Button>
                 
                <div className = "container">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Sector</th>
                                    <th> Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.se.map(
                                            se =>
                                            <tr key = {se.id}>
                                             <td> {se.sectorName}</td>
                                             <td> {se.sectorBrief}</td>
                                        </tr>

                                        )
                                }
                            </tbody>
                        </table>

                 </div>  
            </div>
        );
    }
}

export default SectorLists;