import React, { Component } from 'react';
import { Col,Container,Row, Card } from 'react-bootstrap';
import Companyservices from '../../services/Companyservices';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';

ReactFC.fcRoot(FusionCharts, Charts, FusionTheme);



let chartConfigs = {
    type: 'mscombi2d',// The chart type
    width: '700', // Width of the chart
    height: '400', // Height of the chart
    dataFormat: 'json', // Data type
    dataSource: {
    // Chart Configuration
        "chart": {
            "caption": "Stock Price",
            "subCaption": "In MMbbl = One Million barrels",
            "xAxisName": "Company",
            "yAxisName": "SHare Price",
            "numberSuffix": "K",
            "labeldisplay": "rotate",
            "theme": "fusion",
        },
        // Chart Data
        "categories": [],
        "dataset": []
    },
};

class CompareCompany extends Component {

    constructor(props) {
        super(props)

        this.state = {
            
            companyName: '',
            stkex: '',
            from:'',
            to:'',
            chart: chartConfigs
            
        }

        this.changecompanyNameHandler = this.changecompanyNameHandler.bind(this);
        this.changestkexHandler = this.changestkexHandler.bind(this);
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

    changefromHandler= (event) => {
        this.setState({from: event.target.value});
    }

    changetoHandler= (event) => {
        this.setState({to: event.target.value});
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
        let company = { companyName: this.state.companyName, 
                        stkex: this.state.stkex,
                        from: this.state.from,
                        to: this.state.to
                };
        console.log('company => ' + JSON.stringify(company));

        Companyservices.getstockprice(company.companyName,company.stkex,company.from,company.to).then(res =>
            {
                console.log(res);
                let tempdata = [];
                let templabel = [];
                var prevDs = Object.assign({}, this.state.chart.dataSource);
						
				res.data.forEach((value, key) => {  
				
                    tempdata[key] ={
								'value' : res.data[key].sharePrice
								};
                    templabel[key] ={
                        'label' : res.data[key].date,
                                };
                            });

                prevDs.categories.push({
                    "category": templabel
                });

                prevDs.dataset.push({
                                "seriesname": company.companyName,
                                "renderAs": "line",
                                "data": tempdata

                                });
										 
				this.setState({chart:{dataSource: prevDs}});
									
                  // console.log('data'+JSON.stringify(data));
				   
				
                                  //console.log('this.'+ data);
				console.log('chart'+JSON.stringify(chartConfigs));
							
							
				})//endo of .then line 53				
							
	}

    render() {
        return (
            <Container style={{marginTop:'80px'}}>
            <Row>
            <Col>
                   <Card >
                            
                                <h3 className='text-center'>Select Company</h3>
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
                        

                </Col>
                <Col>

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

export default CompareCompany;