import React, { Component } from 'react';
import Companyservices from '../../services/Companyservices';
import Sectorservice from '../../services/Sectorservice';

class CompanyAddOrUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            id: this.props.match.params.id,
            companyName: '',
            ceo: '',
            boardOfDirectors: '',
            turnover: '',
            companyBrief:'',
            sectorName:'',
            sector:[]
        }
        this.changecompanyNameHandler = this.changecompanyNameHandler.bind(this);
        this.changeceoHandler = this.changeceoHandler.bind(this);
        this.changeboardOfDirectorsHandler = this.changeboardOfDirectorsHandler.bind(this);
        this.changeturnoverHandler = this.changeturnoverHandler.bind(this);
        this.changecompanyBriefHandler = this.changecompanyBriefHandler.bind(this);
        this.changesectorNameHandler = this.changesectorNameHandler.bind(this);
        this.saveOrUpdateCompany = this.saveOrUpdateCompany.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            Companyservices.getCompanyById(this.state.id).then( (res) =>{
                let company = res.data;
                this.setState({
                    companyName: company.companyName, 
                    ceo: company.ceo, 
                    boardOfDirectors: company.boardOfDirectors,
                    turnover: company.turnover,
                    companyBrief: company.companyBrief,
                    sectorName: company.sectorName

                });
            });
        }        
    }


    changecompanyNameHandler= (event) => {
        this.setState({companyName: event.target.value});
    }

    changeceoHandler= (event) => {
        this.setState({ceo: event.target.value});
    }

    changeboardOfDirectorsHandler= (event) => {
        this.setState({boardOfDirectors: event.target.value});
    }

    changeturnoverHandler= (event) => {
        this.setState({turnover: event.target.value});
    }

    changecompanyBriefHandler= (event) => {
        this.setState({companyBrief: event.target.value});
    }

    changesectorNameHandler= (event) => {
        this.setState({sectorName: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/companylists');
    }

    saveOrUpdateCompany = (e) => {
        e.preventDefault();
        let company = { companyName: this.state.companyName, 
                    ceo: this.state.ceo, 
                    boardOfDirectors: this.state.boardOfDirectors,
                    turnover: this.state.turnover,
                    companyBrief: this.state.companyBrief,
                    sectorName: this.state.sectorName
                };
        console.log('company => ' + JSON.stringify(company));

        
        if(this.state.id === '_add'){
            Companyservices.addcompany(company).then(res =>{
                this.props.history.push('/companylists');
            });
        }else{
            Companyservices.updatecompany(this.state.id,company).then( res => {
                this.props.history.push('/companylists');
            });
        }
    }

    getSector(){
        Sectorservice.getse().then(res =>{
            this.setState({sector: res.data})
        })
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center">New Company</h3>
        }else{
            return <h3 className="text-center">Update Company</h3>
        }
    }




    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Company Name: </label>
                                            <input placeholder="company name" name="companyName" className="form-control" 
                                                value={this.state.companyName} onChange={this.changecompanyNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> CEO: </label>
                                            <input placeholder="ceo" name="ceo" className="form-control" 
                                                value={this.state.ceo} onChange={this.changeceoHandler}/>
                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Board Of Directors: </label>
                                            <input placeholder="board of directors" name="boardOfDirectors" className="form-control" 
                                                value={this.state.boardOfDirectors} onChange={this.changeboardOfDirectorsHandler}/>
                                        
                                        </div>
                                        <div className = "form-group">
                                            <label> Turnover: </label>
                                            <input placeholder="turnover" name="turnover" className="form-control" 
                                                value={this.state.turnover} onChange={this.changeturnoverHandler}/>
                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="description" name="companyBrief" className="form-control" 
                                                value={this.state.companyBrief} onChange={this.changecompanyBriefHandler}/>
                                        
                                        </div>
                                        <div className = "form-group">
                                        <label> Sector: </label>
                                        <select class="form-control" value={this.state.sectorName} onChange={this.changesectorNameHandler}>
                                            {
                                                this.getSector()
                                            }
                                            {this.state.sector.map(
                                                s =>
                                                <option>{s.sectorName}</option>
                                            )
                                            
                                            }
                                        </select>
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCompany}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "300px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                
            </div>
        );
    }
}

export default CompanyAddOrUpdate;