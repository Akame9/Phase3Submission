import React, { Component } from 'react';
import {Carousel, Card} from 'react-bootstrap';
class welcome extends Component {
    constructor(props) {
        super(props)

        this.state = {
        
        }

    }

    signup(){
        this.props.history.push('/signup');
    }

    signin(){
        this.props.history.push('/signin');
    }

    render() {
        return (
            
            <div>
                <p>
                <button className="btn btn-dark" onClick={this.signin.bind(this)}>login</button>
                <button className="btn btn-dark" onClick={this.signup.bind(this)}>signup</button>
                </p>
                <Card bg='dark' text='white' className="jumbotron text-center">
                    <h1>WELCOME TO STOCKMART</h1>
                    <h6>An online place for stock market charting</h6>
            
                </Card>
        <Carousel>
        <Carousel.Item>
            <img
            className="d-block w-100"
            src="https://healthitanalytics.com/images/site/article_headers/_normal/GettyImages-1132660268.jpg"
            alt="First slide"
            />
        <Carousel.Caption>
        <h3>First slide label</h3>
        <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://cdn.mos.cms.futurecdn.net/jgXYNK8U4o4itGBBMRtCKa-1200-80.jpg"
        alt="Second slide"
        />

        <Carousel.Caption>
        <h3>Second slide label</h3>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images.idgesg.net/images/article/2020/02/data_analytics_risk_assessment_tracking_trends_graphs_by_ipopba_gettyimages-1150397416_2400x1600-100828857-large.jpg"
        alt="Third slide"
        />

        <Carousel.Caption>
        <h3>Third slide label</h3>
        <p>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
        </Carousel.Caption>
    </Carousel.Item>
    </Carousel>
            </div>
            
        );
    }
}

export default welcome;