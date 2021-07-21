import React, { Component } from 'react';
import Sectorservice from '../../services/Sectorservice';

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
                <h2 className="text-center">Sectors</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addse}> New Sector</button>
                 </div>
                <div className = "row">
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