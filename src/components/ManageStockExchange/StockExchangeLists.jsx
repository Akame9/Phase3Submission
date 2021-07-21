import React, { Component } from 'react';
import SEservices from '../../services/StockExchangeservices';

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
                <h2 className="text-center">Stock Exchanges</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addse}> New Stock Exchange</button>
                 </div>
                <div className = "row">
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