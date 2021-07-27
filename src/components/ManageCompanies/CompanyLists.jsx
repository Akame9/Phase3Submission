import React, { Component } from 'react';
import Companyservices from '../../services/Companyservices';
import {Button} from 'react-bootstrap';

class CompanyLists extends Component {
    constructor(props) {
        super(props)

        this.state = {
                token: this.props.match.params.token, 
                companies: []
        }

        this.addCompany = this.addCompany.bind(this);
        this.updateCompany = this.updateCompany.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
      }

    componentDidMount(){
        Companyservices.getcompany(this.state.token).then((res) => {
            this.setState({ companies: res.data});
        });
    }

    addCompany(){
        this.props.history.push('/add-company/_add/'+this.state.token);
    }

    updateCompany(id){
        this.props.history.push(`/add-company/${id}/`+this.state.token);

    }

    deleteCompany(id){
        this.props.history.push(`/delete-company/${id}/`+this.state.token);

    }

    render() {
        return (
            <div>
                
                <h3 className="text-center" style={{marginTop:'80px'}}>List of Companies</h3>
                <Button  onClick={this.addCompany} size='sm' style={{margin:'10px',marginLeft:'50px'}}> New Company</Button> 
                <div className = "container">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Company </th>
                                    <th> CEO</th>
                                    <th> Board Of Directors</th>
                                    <th> Turnover </th>
                                    <th> Description</th>
                                    <th> Sector</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.state.companies.map(
                                            company =>
                                            <tr key = {company.id}>
                                             <td> { company.companyName} </td>   
                                             <td> {company.ceo}</td>
                                             <td> {company.boardOfDirectors}</td>
                                             <td> {company.turnover}</td>
                                             <td> {company.companyBrief}</td>
                                             <td> {company.sectorName}</td>
                                             <td>
                                             <button onClick={ () => this.updateCompany(company.id)} className="btn btn-info"> Update </button>
                                             </td>
                                             <td>
                                             <button onClick={ () => this.deleteCompany(company.id)} className="btn btn-danger"> Delete </button>
                                             </td>
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

export default CompanyLists;