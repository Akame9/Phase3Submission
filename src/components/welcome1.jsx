import React, { Component } from 'react';
import {Card, Button,Modal} from 'react-bootstrap';
import Userservices from '../services/Userservices';
import './welcome.css';

var token = ''
class welcome1 extends Component {
    constructor(props) {
        super(props)

        this.state = {
            
            show:false,
            username:'',
            password:'',
            valid:false
        
        }

        this.changeusernameHandler = this.changeusernameHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.signin = this.signin.bind(this);


    }

    signup(){
        this.props.history.push('/signup');
    }

    changeusernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }


    signin = (e) => {
        e.preventDefault();
        let user = { username: this.state.username, 
                    password: this.state.password
                };
        console.log('user => ' + JSON.stringify(user));
        Userservices.authenticateuser(JSON.stringify({
            "username" :user.username,
            "password": user.password,
            "role" : "admin"
            })).then(res => {
                console.log(res)
                token = res.data.token;
                console.log("Hello"+token);

                Userservices.signin(user,token).then(res =>{

                    console.log(res)
                    /*let auth = JSON.stringify({
                        "username" :res.data.username,
                        "password": res.data.password,
                        })*/
                    
                    if(res.data.admin){
                        console.log("Helloooooooo "+token)
                        this.props.history.push("/admin/"+token);
                    }
                    else if(res.data.admin==false){
                        //console.log(res)
                        this.props.history.push("/user/"+res.data.id+"/"+ token);
                    }
                    else{
                        this.setState({valid:true});    
                    }
                    
                });

            });
        
        

        
    }


    handleShow(){
        
        this.setState({show:true});
        
    }

    handleHide(){
        
        this.setState({show:false});
    }

    render() {
        return (
            <div className="container-fluid homepage-bgimage">
                <div className="centered jumbotron text-center" >
                        <h1>WELCOME TO STOCKMART</h1>
                        <h6>An online place for stock market charting</h6>
                        <p>
                        <Button variant="link" onClick={this.handleShow.bind(this)} style={{fontWeight:'bold'}}>Login</Button>
                        or
                        <Button variant="link" onClick={this.signup.bind(this)} style={{fontWeight:'bold'}}>Signup</Button>
                        to continue
                        </p>
                </div>
                <Modal show={this.state.show} onHide={this.handleHide.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Login</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <input placeholder="username" name="username" className="form-control" 
                value={this.state.username} onChange={this.changeusernameHandler}/>

                <input placeholder="password" name="password" className="form-control" 
                value={this.state.password} onChange={this.changepasswordHandler}/>

                </Modal.Body>

                <Modal.Footer>
                    <button className="btn btn-success" onClick={this.signin}>Sign In </button>
                    {this.state.valid && <p class="alert alert-danger" role="alert">user not confirmed yet</p>}
                    
                </Modal.Footer>
                </Modal>
                
                
            </div>
        );
    }
}

export default welcome1;