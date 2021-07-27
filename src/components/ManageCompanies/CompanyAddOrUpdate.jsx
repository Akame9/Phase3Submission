import React, { Component } from 'react';
import Companyservices from '../../services/Companyservices';
import Sectorservice from '../../services/Sectorservice';
import {DropdownButton, Dropdown, Container,Row,Col} from 'react-bootstrap';
 
class CompanyAddOrUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            token: this.props.match.params.token,
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
            //return
        }else{
            Companyservices.getCompanyById(this.state.id,this.state.token).then( (res) =>{
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
        
        Sectorservice.getse(this.state.token).then(res =>{
            console.log(res)
            this.setState({sector: res.data})
        })
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
        console.log('Hello')
        this.setState({sectorName: event.target.value});
    }
    
    cancel(){
        this.props.history.push('/companylists/'+this.state.token);
    }

    handleSelect = (e) => {
        console.log(e)
        this.state.sectorName = e;
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

        
        if(this.state.id == '_add'){
            Companyservices.addcompany(company,this.state.token).then(res =>{
                this.props.history.push('/companylists/'+this.state.token);
            });
        }else{
            Companyservices.updatecompany(this.state.id,company,this.state.token).then( res => {
                this.props.history.push('/companylists/'+this.state.token);
            });
        }
    }

    

    getTitle(){
        if(this.state.id == '_add'){
            return <h3 className="text-center">New Company</h3>
        }else{
            return <h3 className="text-center">Update Company</h3>
        }
    }




    render() {
        return (
            <div>
                <br></br>
                   <div className = "container" style={{marginTop:'50px'}}>
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
                                        {/*
                                        <Container>
                                            <Row>
                                                <Col>
                                                Hello
                                                <DropdownButton
                                                alignRight
                                                title="select"
                                                id="dropdown-menu-align-right"
                                                variant="Secondary"
                                                onSelect={this.handleSelect}
                                                
                                                    >
                                        {this.state.sector.map(
                                                s =>
                                                <Dropdown.Item eventKey={s.sectorName}>{s.sectorName}</Dropdown.Item>
                                        )}
                                        
                                        </DropdownButton>
                                                </Col>
                                            </Row>
                                        </Container>
                                        */}
                                        {
                                        <select class="form-control" onChange={this.changesectorNameHandler}>

                                            
                                            {this.state.sector.map(
                                                s =>
                                                <option value={s.sectorName}>{s.sectorName}</option>
                                            )
                                            
                                            }
                                        </select>
                                        

                                        }
                                        </div>

                                        <button className="btn btn-success" onClick={this.saveOrUpdateCompany} style={{marginTop:"10px"}}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "380px",marginTop:"10px"}}>Cancel</button>
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