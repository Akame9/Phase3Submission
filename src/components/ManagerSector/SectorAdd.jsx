import React, { Component } from 'react';
import Sectorservice from '../../services/Sectorservice';

class SectorAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            token: this.props.match.params.token,
            sectorName: '',
            sectorBrief: ''
        }
        this.changesectorNameHandler = this.changesectorNameHandler.bind(this);
        this.changesectorBriefHandler = this.changesectorBriefHandler.bind(this);
        this.save = this.save.bind(this);
    }

    changesectorNameHandler= (event) => {
        this.setState({sectorName: event.target.value});
    }

    changesectorBriefHandler= (event) => {
        this.setState({sectorBrief: event.target.value});
    }

    cancel(){
        this.props.history.push('/sectorlists/'+this.state.token);
    }

    save = (e) => {
        e.preventDefault();
        let s = { sectorName: this.state.sectorName, 
                  sectorBrief: this.state.sectorBrief
                };
        console.log('s => ' + JSON.stringify(s));

        Sectorservice.addse(s,this.state.token).then(res => {
            this.props.history.push('/sectorlists/'+this.state.token);
        });
    }


    render() {
        return (
            <div>
                 <br></br>
                   <div className = "container" style={{marginTop:'50px'}}>
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3 className="text-center">New Sector</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Sector: </label>
                                            <input placeholder="sector" name="sectorName" className="form-control" 
                                                value={this.state.sectorName} onChange={this.changesectorNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Description: </label>
                                            <input placeholder="description" name="sectorBrief" className="form-control" 
                                                value={this.state.sectorBrief} onChange={this.changesectorBriefHandler}/>
                                            
                                        </div>

                                        <button className="btn btn-success" onClick={this.save} style={{marginTop: "10px"}}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "380px", marginTop: "10px"}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                
            </div>
        );
    }
}

export default SectorAdd;