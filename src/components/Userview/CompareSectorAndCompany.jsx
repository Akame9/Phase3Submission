import React, { Component } from 'react';
import { Col,Container,Row, Card, Button } from 'react-bootstrap';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Sectorservice from '../../services/Sectorservice';
import Companyservices from '../../services/Companyservices';


ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



let chartConfigs = {
    type: 'mscombi2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
    // Chart Configuration
        "chart": {
            "caption": "Sector v/s Company",
            "subCaption": "Performance of Companies in a Sector",
            "xAxisName": "Company/Sector",
            "yAxisName": "Share Price",
            "numberSuffix": "K",
            "labeldisplay": "rotate",
            "theme": "fusion",
        },
        // Chart Data
        "categories": [],
        "dataset": []
    },
};


class CompareSectorAndCompany extends Component {

    constructor(props) {
        super(props)

        this.state = {
            token: this.props.match.params.token,
            companyName: '',
            stkex: '',
            sectorName: '',
            from:'',
            to:'',
            selectedcompany: true,
            selectedsector: false
        }

        this.changecompanyNameHandler = this.changecompanyNameHandler.bind(this);
        this.changestkexHandler = this.changestkexHandler.bind(this);
        this.changecompanyselectHandler = this.changecompanyselectHandler.bind(this);
        this.changesectorselectHandler = this.changesectorselectHandler.bind(this);
        this.changesectorNameHandler = this.changesectorNameHandler.bind(this);
        this.changefromHandler = this.changefromHandler.bind(this);
        this.changetoHandler = this.changetoHandler.bind(this);
        this.generateMap = this.generateMap.bind(this);
        this.addMore = this.addMore.bind(this);
        
    }

    componentDidMount(){
        chartConfigs.dataSource.dataset = [];
        chartConfigs.dataSource.categories = [];
        this.setState({chart:chartConfigs});
        
        
    }

    changecompanyNameHandler= (event) => {
        this.setState({companyName: event.target.value});
    }

    changestkexHandler= (event) => {
        this.setState({stkex: event.target.value});
    }

    changesectorNameHandler= (event) => {
        this.setState({sectorName: event.target.value});
    }

    changefromHandler= (event) => {
        this.setState({from: event.target.value});
    }

    changetoHandler= (event) => {
        this.setState({to: event.target.value});
    }

    changecompanyselectHandler= (event) => {
        this.setState({selectedcompany: true, selectedsector: false});
    }

    changesectorselectHandler= (event) => {
        this.setState({selectedcompany: false, selectedsector: true});
    }

    generateMap = (e) => {
        e.preventDefault();
        chartConfigs.dataSource.dataset = [];
        chartConfigs.dataSource.categories = [];
        this.setState({chart:chartConfigs});
        this.addMore(e);


    }

    addMore = (e) => {
        e.preventDefault();

        if(this.state.selectedcompany){
            let company = { companyName: this.state.companyName, 
                stkex: this.state.stkex,
                from: this.state.from,
                to: this.state.to
        };
        console.log('company => ' + JSON.stringify(company));

        Companyservices.getstockprice(company.companyName,company.stkex,company.from,company.to,this.state.token).then(res =>
        {
        console.log(res);
        let tempdata = [];
        let templabel = [];
        let tempsharePrice = 0;
        let count = 0;
        var prevDs = Object.assign({}, this.state.chart.dataSource);
                
        res.data.forEach((value, key) => {
            
            tempsharePrice  = tempsharePrice + res.data[key].sharePrice;
            count++;
        });
        let avg = tempsharePrice/count;
        
            tempdata.push({
                        'value' : avg
                        });
            templabel.push({
                'label' : company.from,
                        });
                    

        prevDs.categories.push({
            "category": templabel
        });

        prevDs.dataset.push({
                        "seriesname": company.companyName,
                        "renderAs": "column",
                        "data": tempdata

                        });
                                 
        this.setState({chart:{dataSource: prevDs}});
                            
          // console.log('data'+JSON.stringify(data));
           
        
                          //console.log('this.'+ data);
        console.log('chart'+JSON.stringify(chartConfigs));
                    
                    
        })//endo of .then line 53				

        }

        if(this.state.selectedsector){
            let sector = { sectorName: this.state.sectorName, 
                from: this.state.from,
                to: this.state.to
            };
            console.log('sector => ' + JSON.stringify(sector));
    
            Sectorservice.getsectorprice(sector.sectorName,sector.from,sector.to,this.state.token).then(res =>
            {
                console.log(res);
                let tempdata = [];
                let templabel = [];
                var prevDs = Object.assign({}, this.state.chart.dataSource);
                        
                
                tempdata.push({
                            'value' : res.data
                        });
                templabel.push({
                        'label' : sector.from,
                        });
                        
    
                prevDs.categories.push({
                    "category": templabel
                });
    
                prevDs.dataset.push({
                                "seriesname": sector.sectorName,
                                "renderAs": "column",
                                "data": tempdata
    
                                });
                                        
                this.setState({chart:{dataSource: prevDs}});
                                    
                console.log('chart'+JSON.stringify(chartConfigs));
                            
                            
                })//endo of .then line 53				
            

        }
                        
    }

    render() {
        return (
            <Container style={{marginTop:'80px'}}>
            <Row>
            <Col xs={5}>
                   
                            
            <h3 className='text-center'>Select Company/Sector</h3>
            <div>
                <Button size="sm" style={{marginBottom:'10px'}}
                    onClick={this.changecompanyselectHandler}
                >Company</Button>
                <Button  size="sm" style={{marginLeft: '10px', marginBottom:'10px'}} onClick={this.changesectorselectHandler}
                >Sector</Button>
                
            </div>
                    {
                        this.state.selectedcompany
                            && <Card >
                                        <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            <label style={{marginBottom:'5px'}}> Company Name: </label>
                                            <input placeholder="company name" name="companyName" className="form-control" 
                                                style={{marginBottom:'5px'}} value={this.state.companyName} onChange={this.changecompanyNameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                        <label style={{marginBottom:'5px'}}> Stock Exchange Name: </label>
                                            <input placeholder="stock exchange name" name="stkex" className="form-control" 
                                               style={{marginBottom:'5px'}} style={{marginBottom:'5px'}} value={this.state.stkex} onChange={this.changestkexHandler}/>
                                        
                                        
                                        </div>
                                        <div className = "form-group">
                                            <label style={{marginBottom:'5px'}}> From : </label>
                                            <input placeholder="from date" name="from" className="form-control" 
                                                style={{marginBottom:'5px'}} value={this.state.from} onChange={this.changefromHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <label style={{marginBottom:'5px'}}> To : </label>
                                            <input placeholder="to date" name="to" className="form-control" 
                                                style={{marginBottom:'5px'}} value={this.state.to} onChange={this.changetoHandler}/>
                                        </div>

                                        <button className="btn btn-success" onClick={this.generateMap} style={{margin:'10px'}}>Generate Map</button>
                                        <button className="btn btn-success" onClick={this.addMore} style={{margin:'10px'}}>Add Company</button>
                                        
                                        
                                    </form>
                                </div>
                    </Card>
                        

                     }

                     {
                         this.state.selectedsector && <Card >
                            
                         <h3 className='text-center'>Select Sector</h3>
                         <div className = "card-body">
                             <form>
                                 <div className = "form-group">
                                     <label style={{marginBottom:'5px'}}> Sector Name: </label>
                                     <input placeholder="sector name" name="companyName" className="form-control" 
                                         style={{marginBottom:'5px'}} value={this.state.sectorName} onChange={this.changesectorNameHandler}/>
                                 </div>
                                 <div className = "form-group">
                                     <label style={{marginBottom:'5px'}}> From : </label>
                                     <input placeholder="from date" name="from" className="form-control" 
                                         style={{marginBottom:'5px'}} value={this.state.from} onChange={this.changefromHandler}/>
                                 </div>
                                 <div className = "form-group">
                                     <label style={{marginBottom:'5px'}}> To : </label>
                                     <input placeholder="to date" name="to" className="form-control" 
                                         style={{marginBottom:'5px'}} value={this.state.to} onChange={this.changetoHandler}/>
                                 </div>

                                 <button className="btn btn-success" onClick={this.generateMap} style={{margin:'10px'}}>Generate Map</button>
                                 <button className="btn btn-success" onClick={this.addMore} style={{margin:'10px'}}>Add Sector</button>
                                 
                                 
                             </form>
                         </div>
             </Card>
            
                     }
                                
                                

                </Col>
                <Col xs={7}>

                   <Card>								
								{chartConfigs.Chart}
							 <ReactFC {...chartConfigs} />;


                
                    </Card>

                </Col>
            </Row>
            </Container>
        );
    }
}

export default CompareSectorAndCompany;