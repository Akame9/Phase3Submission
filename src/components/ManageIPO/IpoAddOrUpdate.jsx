import React, { Component } from 'react';
import Iposervices from '../../services/Iposervices';

class IpoAddOrUpdate extends Component {

    constructor(props) {
        super(props)

        this.state = {
            token: this.props.match.params.token,
            id: this.props.match.params.id,
            companyName: '',
            pricePerShare: '',
            totalNumberOfShare: '',
            date:'',
            time:''
        }
        this.changecompanyNameHandler = this.changecompanyNameHandler.bind(this);
        this.changepricePerShareHandler = this.changepricePerShareHandler.bind(this);
        this.changetotalNumberOfShareHandler = this.changetotalNumberOfShareHandler.bind(this);
        this.changedateHandler = this.changedateHandler.bind(this);
        this.changetimeHandler = this.changetimeHandler.bind(this);
        this.saveOrUpdateIpo = this.saveOrUpdateIpo.bind(this);
    }

    componentDidMount(){

        if(this.state.id === '_add'){
            return
        }else{
            Iposervices.getIpoById(this.state.id,this.state.token).then( (res) =>{
                let ipo = res.data;
                this.setState({
                    companyName: ipo.companyName,
                    pricePerShare: ipo.pricePerShare,
                    totalNumberOfShare: ipo.totalNumberOfShare,
                    date:ipo.date,
                    time: ipo.time

                });
            });
        }        
    }

    changecompanyNameHandler= (event) => {
        this.setState({companyName: event.target.value});
    }

    changepricePerShareHandler= (event) => {
        this.setState({pricePerShare: event.target.value});
    }

    changetotalNumberOfShareHandler= (event) => {
        this.setState({totalNumberOfShare: event.target.value});
    }
    changedateHandler= (event) => {
        this.setState({date: event.target.value});
    }
    changetimeHandler= (event) => {
        this.setState({time: event.target.value});
    }

    cancel(){
        this.props.history.push('/ipolists/'+this.state.token);
    }

    saveOrUpdateIpo = (e) => {
        e.preventDefault();
        let ipo = { companyName: this.state.companyName, 
                    pricePerShare: this.state.pricePerShare, 
                    totalNumberOfShare: this.state.totalNumberOfShare,
                    date: this.state.date,
                    time: this.state.time
                };
        console.log('ipo => ' + JSON.stringify(ipo));

        
        if(this.state.id === '_add'){
            Iposervices.addipo(ipo,this.state.token).then(res =>{
                this.props.history.push('/ipolists/'+this.state.token);
            });
        }else{
            Iposervices.updateipo(this.state.id,ipo,this.state.token).then( res => {
                this.props.history.push('/ipolists/'+this.state.token);
            });
        }
    }

    getTitle(){
        if(this.state.id === '_add'){
            return <h3 className="text-center" >Add IPO</h3>
        }else{
            return <h3 className="text-center" >Update IPO</h3>
        }
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container" style={{marginTop:"80px"}}>
                   <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                {
                                    this.getTitle()
                                }
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label> Company Name: </label>
                                            <input placeholder="Company Name" name="companyName" className="form-control" 
                                                value={this.state.companyName} onChange={this.changecompanyNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label> Price/Share: </label>
                                            <input placeholder="price in Rs" name="pricePerShare" className="form-control" 
                                                value={this.state.pricePerShare} onChange={this.changepricePerShareHandler}/>
                                            
                                        </div>
                                        <div className = "form-group">
                                            <label> Total Share: </label>
                                            <input placeholder="no of shares" name="totalNumberOfShare" className="form-control" 
                                                value={this.state.totalNumberOfShare} onChange={this.changetotalNumberOfShareHandler}/>
                                        
                                        </div>
                                        <div className = "form-group">
                                            <label> Open Date Time: </label>
                                            <input placeholder="open date" name="date" className="form-control" 
                                                value={this.state.date} onChange={this.changedateHandler}/>
                                            <input placeholder="open time" name="time" className="form-control" 
                                                value={this.state.time} onChange={this.changetimeHandler}/>
                                        </div>


                                        

                                        <button className="btn btn-success" onClick={this.saveOrUpdateIpo} style={{marginTop:"10px"}}>Save</button>
                                        <button className="btn btn-danger" onClick={this.cancel.bind(this)} style={{marginLeft: "380px", marginTop:'10px'}}>Cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                
                    </div>
                </div>
        );
    }
}

export default IpoAddOrUpdate;