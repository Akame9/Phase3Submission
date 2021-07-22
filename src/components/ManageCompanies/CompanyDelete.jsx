import React, { Component } from 'react';
import Companyservices from '../../services/Companyservices';

class CompanyDelete extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            id: this.props.match.params.id
         }

         this.delete = this.delete.bind(this);
    }


    delete(companyId){
        Companyservices.deleteCompany(companyId).then(res =>{
            this.props.history.push('/companylists');
        });
    }

    render() {
        return (
            <div class="alert alert-success" role="alert">
                <h4 class="alert-heading">Delete Company</h4>
                <p>The Company data will be removed from the listing</p>
                <hr/>
                <button className="btn btn-primary" onClick={ () => this.delete(this.state.id) }>Ok</button>
  
            </div>
        );
    }
}

export default CompanyDelete;