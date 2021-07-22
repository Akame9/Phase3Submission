import React, { Component } from 'react';
import Iposervices from '../../services/Iposervices';
import {Button} from 'react-bootstrap';

class IpoLists extends Component {
    constructor(props) {
        super(props)

        this.state = {
                ipos: []
        }

        this.addIpo = this.addIpo.bind(this);
        this.updateIpo = this.updateIpo.bind(this);
        this.deleteIpo = this.deleteIpo.bind(this);
      }

    componentDidMount(){
        Iposervices.getipos().then((res) => {
            this.setState({ ipos: res.data});
        });
    }

    addIpo(){
        this.props.history.push('/add-ipo/_add');
    }

    updateIpo(id){
        this.props.history.push(`/add-ipo/${id}`);
    }

    deleteIpo(id){
        this.props.history.push(`/delete-ipo/${id}`);
    }

    render() {
        return (
            <div>
                
                <h2 className="text-center" style={{marginTop:'80px'}}>IPO List</h2>
                
                <Button onClick={this.addIpo} size='sm' style={{margin:'10px',marginLeft:'50px'}}> New IPO</Button>
                
                <div className = "container">
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
                                             <td>
                                             <button onClick={ () => this.updateIpo(ipo.id)} className="btn btn-info"> Update </button>
                                             </td>
                                             <td>
                                             <button onClick={ () => this.deleteIpo(ipo.id)} className="btn btn-danger"> Delete </button>
                                             </td>
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

export default IpoLists;