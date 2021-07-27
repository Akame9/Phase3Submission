import React, { Component } from 'react';
import {Card,Container,Row,Col} from 'react-bootstrap';
import Companyservices from '../../services/Companyservices';
import ReactFC from "react-fusioncharts";
import FusionCharts from "fusioncharts";
import Column2D from "fusioncharts/fusioncharts.charts";

// Include the theme as fusion
import FusionTheme from "fusioncharts/themes/fusioncharts.theme.fusion";

// Adding the chart and theme as dependency to the core fusioncharts
ReactFC.fcRoot(FusionCharts, Column2D, FusionTheme);



// Create a JSON object to store the chart configurations
const chartConfigs = {
    type: "column2d", // The chart type
    width: "700", // Width of the chart
    height: "400", // Height of the chart
    dataFormat: "json", // Data type
    dataSource: {
      // Chart Configuration
      chart: {
        caption: "Trend Of the Company ",    //Set the chart caption
        xAxisName: "Dates (in yyyy-mm-dd)",           //Set the x-axis name
        yAxisName: "Share Prices (in Rs)",  //Set the y-axis name
        theme: "fusion",
        labeldisplay: "rotate",                 //Set the theme for your chart
      },
      // Chart Data - from step 2
      data: []
    }
  };



class CompanyDetails extends Component {
    constructor(props) {
        super(props)

        this.state = {
            token: this.props.match.params.token,
            companyName: this.props.match.params.companyName,
            stockExchangeName: this.props.match.params.stockExchangeName,
            cmp: [],
            ipo: [],
            cse: [],
            chart: chartConfigs
        }
        
    }

    componentDidMount(){
        Companyservices.getbycompanyName(this.state.companyName,this.state.token).then(res => {
            console.log(res);
            this.setState({cmp:res.data});
        });
        Companyservices.getcompanyipo(this.state.companyName,this.state.token).then(res =>{
            console.log(res);
            this.setState({ipo:res.data});
        });
        Companyservices.getcompanycse(this.state.companyName,this.state.token).then(res =>{
            console.log(res)
            this.setState({cse:res.data});
        });

        Companyservices.getstockprice(this.state.companyName,this.state.stockExchangeName,"2016-01-01","2030-01-01",this.state.token).then(res =>
            {
                console.log(res);
                this.state.chart.dataSource.data = [];
                var prevDs = Object.assign({}, this.state.chart.dataSource);
						
							res.data.forEach((value, key) => {  
									//		data[key] = {
							prevDs.data[key] ={
										
							    'label' : res.data[key].date,
								'value' : res.data[key].sharePrice
						};
									
										 
						this.setState({
							chart:{dataSource: prevDs}
					});
									
                  // console.log('data'+JSON.stringify(data));
				   
			});
                                  //console.log('this.'+ data);
			console.log('chart'+JSON.stringify(chartConfigs));
							
							
		})//endo of .then line 53				
		
    }

    render() {
        return (
            <div >
                <Container style={{marginTop:'80px'}}>
                    <Row>
                        <Col xs={4}>
                        <Card bg='dark' text='white'>
                            <Card.Header>{this.state.cmp.companyName}</Card.Header>
                            
                            <Card.Text style={{marginLeft:'10px'}}>
                            CEO : {this.state.cmp.ceo}<br/>
                            Board Of Directors : {this.state.cmp.boardOfDirectors}<br/>
                            Turnover : {this.state.cmp.turnover}<br/>
                            Description : {this.state.cmp.companyBrief}<br/>
                            Sector : {this.state.cmp.sectorName}<br/>
                            </Card.Text>
                            
                            <Card.Text style={{marginLeft:'10px'}}>IPO : <br/>
                            Price Per Share : {this.state.ipo.pricePerShare}<br/>
                            Total Number Of Shares : {this.state.ipo.totalNumberOfShare}<br/>
                            Date : {this.state.ipo.date}<br/>
                            Time : {this.state.ipo.time}<br/>
                            </Card.Text>
                            
                            
                            <Card.Text style={{marginLeft:'10px'}}>
                            Listed In :
                            {   
                                this.state.cse.map(
                                    se =>
                                    <p>{se.stockExchangeName}</p>
                                )
                            }
                            </Card.Text>
                            
                            
                            </Card>
                        </Col>

                        <Col xs={4}>
                        <Card>
                        <ReactFC {...chartConfigs} />
                        </Card>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        );
    }
}

export default CompanyDetails;