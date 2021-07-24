import React, { Component } from 'react';
import { Card , Button} from 'react-bootstrap';
import Userservices from '../../services/Userservices';



var change = false;
class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: []
                        
        }

        this.changepasswordHandler = this.changepassword.bind(this);
        this.changepassword = this.changepassword.bind(this);
      
    }

    componentDidMount(){

        Userservices.getuser(this.state.id).then(res =>{
            this.setState({user: res.data})
        })
        
    }

    changepassword(){
        change=true;
        this.setState();
    }
    changepasswordHandler= (event) => {
        Userservices.updateuser(this.state.id,event.target.value).then(res => {
            this.setState({user: res.data });
        });
        change=false;
    }

    render() {
        return (
            <Card style={{marginTop:"100px",width:"18rem"}}>
                <Card.Text>Username : {this.state.user.username}</Card.Text>
                <Card.Text>Password : {this.state.user.password}</Card.Text>
                <Card.Text>EmailId : {this.state.user.email}</Card.Text>
                <Button onClick={this.changepassword}>Change Password</Button>
                
                { 
                 
                change && <input placeholder="password" name="password" className="form-control" 
                             value={this.state.user.password} onChange={this.changepasswordHandler}/>
                                    
                
                }
                

            </Card>
        );
    }
}

export default UserProfile;