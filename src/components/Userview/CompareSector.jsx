import React, { Component } from 'react';
import { Col,Container,Row, Card } from 'react-bootstrap';
import FusionCharts from 'fusioncharts';
import Charts from 'fusioncharts/fusioncharts.charts';
import ReactFC from 'react-fusioncharts';
import FusionTheme from 'fusioncharts/themes/fusioncharts.theme.fusion';
import Sectorservice from '../../services/Sectorservice';

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
            "subCaption": "Performance of Different Sectors",
            "xAxisName": "Company",
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


class CompareSector extends Component {

    constructor(props) {
        super(props)

        this.state = {
            token: this.props.match.params.token,
            sectorName: '',
            from:'',
            to:'',
            
        }

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

    changesectorNameHandler= (event) => {
        this.setState({sectorName: event.target.value});
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

							

    render() {
        return (
            <Container style={{marginTop:'80px'}}>
            <Row>
            <Col>
                   <Card >
                            
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

export default CompareSector;