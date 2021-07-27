import React, { Component } from 'react';
import Userservices from '../services/Userservices';

class SignUp extends Component {
    constructor(props) {
        super(props)

        this.state = {
                username:'',
                password:'',
                email:'',
                 
        }

        this.changeusernameHandler = this.changeusernameHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.changeemailHandler = this.changeemailHandler.bind(this);
        this.signUp = this.signUp.bind(this);

      }

    changeusernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    changeemailHandler= (event) => {
        this.setState({email: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    signUp = (e) => {
        e.preventDefault();
        let user = { username: this.state.username, 
                    password: this.state.password, 
                    email: this.state.email
                };
        console.log('user => ' + JSON.stringify(user));

        Userservices.signup(user).then(res =>{
            this.props.history.push("/");
        });
    }


    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3>Sign Up</h3>
                                <div className = "card-body">
                                    <form>
                                        <div className = "form-group">
                                            
                                            <input placeholder="username" name="username" className="form-control" 
                                                value={this.state.username} onChange={this.changeusernameHandler}/>
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="password" name="password" className="form-control" 
                                                value={this.state.password} onChange={this.changepasswordHandler}/>
                                            
                                        </div>
                                        <div className = "form-group">
                                            <input placeholder="email" name="email" className="form-control" 
                                                value={this.state.email} onChange={this.changeemailHandler}/>
                                        
                                        </div>
                                    
                                        <button className="btn btn-success" onClick={this.signUp}>Sign Up</button>
                                        
                                        <button type="button" className="btn btn-link" onClick={this.cancel.bind(this)} 
                                        style={{marginLeft: "300px"}}>cancel</button>
                                    </form>
                                </div>
                            </div>
                        </div>

                   </div>
                
                
            </div>
        );
    }
}

export default SignUp;