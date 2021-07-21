import React, { Component } from 'react';
import Companyservices from '../../services/Companyservices';
import Admin from '../Admin';

class CompanyLists extends Component {
    constructor(props) {
        super(props)

        this.state = {
                companies: []
        }

        this.addCompany = this.addCompany.bind(this);
        this.updateCompany = this.updateCompany.bind(this);
        this.deleteCompany = this.deleteCompany.bind(this);
      }

    componentDidMount(){
        Companyservices.getcompany().then((res) => {
            this.setState({ companies: res.data});
        });
    }

    addCompany(){
        this.props.history.push('/add-company/_add');
    }

    updateCompany(id){
        this.props.history.push(`/add-company/${id}`);

    }

    deleteCompany(id){
        this.props.history.push(`/delete-company/${id}`);

    }

    render() {
        return (
            <div>
                
                <h2 className="text-center">Companies Listed</h2>
                <div className = "row">
                    <button className="btn btn-primary" onClick={this.addCompany}> New Company</button>
                 </div>
                <div className = "row">
                        <table className = "table table-striped table-bordered">

                            <thead>
                                <tr>
                                    <th> Company </th>
                                    <th> CEO</th>
                                    <th> BoardOfDirectors</th>
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