import React, { Component } from 'react';
import Sectorservice from '../../services/Sectorservice';

class SectorAdd extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
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
        this.props.history.push('/sectorlists');
    }

    save = (e) => {
        e.preventDefault();
        let s = { sectorName: this.state.sectorName, 
                  sectorBrief: this.state.sectorBrief
                };
        console.log('s => ' + JSON.stringify(s));

        Sectorservice.addse(s).then(res => {
            this.props.history.push('/sectorlists');
        });
    }


    render() {
        return (
            <div>
                 <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3>New Sector</h3>
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

                                        <button className="btn btn-success" onClick={this.save}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "10px"}}>Cancel</button>
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