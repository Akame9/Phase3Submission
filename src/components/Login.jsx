import React, { Component } from 'react';
import Userservices from '../services/Userservices';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
                username:'',
                password:''
        }

        this.changeusernameHandler = this.changeusernameHandler.bind(this);
        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.signin = this.signin.bind(this);

      }

    changeusernameHandler= (event) => {
        this.setState({username: event.target.value});
    }

    changepasswordHandler= (event) => {
        this.setState({password: event.target.value});
    }

    cancel(){
        this.props.history.push('/');
    }

    signin = (e) => {
        e.preventDefault();
        let user = { username: this.state.username, 
                    password: this.state.password, 
                };
        console.log('user => ' + JSON.stringify(user));

        Userservices.signin(user).then(res =>{
            if(res){
                this.props.history.push("/");
            }
            else{
                <p>wrong username or password</p>
            }
            
        });
    }

    render() {
        return (
            <div>
                <br></br>
                   <div className = "container">
                        <div className = "row">
                            <div className = "card col-md-6 offset-md-3 offset-md-3">
                                <h3>Sign In</h3>
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
                                        
                                        <button className="btn btn-success" onClick={this.signin}>Sign In </button>
                                        
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

export default Login;