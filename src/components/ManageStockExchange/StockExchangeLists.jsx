import React, { Component } from 'react';
import SEservices from '../../services/StockExchangeservices';
import {Button} from 'react-bootstrap';

class StockExchangeLists extends Component {

    constructor(props) {
        super(props)

        this.state = {
                se: []
        }

        this.addse = this.addse.bind(this);
      }

      componentDidMount(){
        SEservices.getse().then((res) => {
            this.setState({ se: res.data});
        });
    }

    addse(){
        this.props.history.push('/add-se');
    }

    render() {
        return (
            <div>
                <h2 className="text-center" style={{marginTop:'80px'}}>Stock Exchanges</h2>
                <Button onClick={this.addse} size='sm' style={{margin:'10px',marginLeft:'50px'}}> New Stock Exchange</Button>
                <div className = "container">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Stock Exchange</th>
                                    <th> Description</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.se.map(
                                            se =>
                                            <tr key = {se.id}>
                                             <td> {se.stockExchangeName}</td>
                                             <td> {se.stockExchangeBrief}</td>
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

export default StockExchangeLists;