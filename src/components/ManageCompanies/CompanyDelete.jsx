import React, { Component } from 'react';
import Companyservices from '../../services/Companyservices';
import {Card} from 'react-bootstrap';

class CompanyDelete extends Component {

    constructor(props) {
        super(props)

        this.state = {
            token: this.props.match.params.token,
            id: this.props.match.params.id
         }

         this.delete = this.delete.bind(this);
    }


    delete(companyId){
        Companyservices.deleteCompany(companyId,this.state.token).then(res =>{
            this.props.history.push('/companylists/'+this.state.token);
        });
    }

    render() {
        return (
            <Card style={{width:'18rem',marginTop:'100px'}}>
                <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Delete Company</h4>
                <p>The Company data will be removed from the listing</p>
                <hr/>
                <button className="btn btn-primary" onClick={ () => this.delete(this.state.id) }>Ok</button>
  
                </div>
            </Card>

        );
    }
}

export default CompanyDelete;