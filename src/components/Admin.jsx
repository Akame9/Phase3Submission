import React, { Component } from 'react';

class Admin extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
        }

      }

    uploaddata(){
        this.props.history.push('/uploaddata');
    }

    ipo(){
        this.props.history.push('/ipolists');
        
    }


    render() {
        return (
            <div>
                <div>
                <nav className="navbar navbar-dark bg-dark">
                    <a className="navbar-brand" href="#">
                    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" className="d-inline-block align-top" alt=""/>
                        StockMart
                    </a>
                </nav>
                </div>

                <div className="d-flex justify-content-end">
                <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <a className="nav-link" href="#" style={{marginLeft: "50px"}}>Home <span class="sr-only">(current)</span></a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style={{marginLeft: "50px"}}
        onClick={this.uploaddata.bind(this)}>Import Data</a>
      </li>

      <li className="nav-item">
        <a className="nav-link" href="#" style={{marginLeft: "50px"}}>Manage Company</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style={{marginLeft: "50px"}}>Manage Stock Exchange</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#" style={{marginLeft: "50px"}}
        onClick={this.ipo.bind(this)}>Manage IPO</a>
      </li>
      <li className="nav-item">
      <button className="btn btn-outline-dark" style={{marginLeft: "50px"}}>logout</button>
      </li>


      
    </ul>
    
    </div>
    </nav>
                </div>
                
                

                
            </div>
        );
    }
}

export default Admin;