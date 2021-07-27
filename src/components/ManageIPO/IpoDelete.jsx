import React, { Component } from 'react';
import Iposervices from '../../services/Iposervices';

class IpoDelete extends Component {

    constructor(props) {
        super(props)

        this.state = {
            token: this.props.match.params.token,
            id: this.props.match.params.id
         }

         this.delete = this.delete.bind(this);
    }


    delete(ipoId){
        Iposervices.deleteipo(ipoId,this.state.token).then(res =>{
            this.props.history.push('/ipolists/'+this.state.token);
        });
    }
    render() {
        return (
            <div className="alert alert-success" role="alert">
                <h4 class="alert-heading">Delete IPO</h4>
                <p>The IPO will be removed from the listing</p>
                <hr/>
                <button className="btn btn-primary" onClick={ () => this.delete(this.state.id) }>Ok</button>
  
            </div>
        );
    }
}

export default IpoDelete;