import React, { Component } from 'react';
import { Card , Button, Modal} from 'react-bootstrap';
import Userservices from '../../services/Userservices';


class UserProfile extends Component {
    constructor(props) {
        super(props)

        this.state = {
            id: this.props.match.params.id,
            user: [],
            show : false
                        
        }

        this.changepasswordHandler = this.changepasswordHandler.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
      
    }

    componentDidMount(){

        Userservices.getuser(this.state.id).then(res =>{
            this.setState({user: res.data})
        })
        
    }

    handleShow(){
        
        this.setState({show:true});
        
    }

    handleHide(){
        
        this.setState({show:false});
    }
    changepasswordHandler= (event) => {
        console.log(event.target.value)
        this.setState({user:{password : event.target.value}});
        
        
    }

    updatePassword = (e) => {
        e.preventDefault();
        Userservices.updateuser(this.state.id,this.state.user.password).then(res => {
            this.setState({user: res.data, show : false });
        });

    }

    render() {
        return (
            <Card style={{marginTop:"100px",width:"18rem"}}>
                <Card.Text>Username : {this.state.user.username}</Card.Text>
                <Card.Text>Password : {this.state.user.password}</Card.Text>
                <Card.Text>EmailId : {this.state.user.email}</Card.Text>
                <Button onClick={this.handleShow.bind(this)}>Change Password</Button>
                

                <Modal show={this.state.show} onHide={this.handleHide.bind(this)}>
                <Modal.Header closeButton>
                    <Modal.Title>Enter New Password</Modal.Title>
                </Modal.Header>

                <Modal.Body>
                <input placeholder="password" name="password" className="form-control" 
                value={this.state.user.password} onChange={this.changepasswordHandler}/>
                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary" onClick={this.updatePassword}>Save changes</Button>
                </Modal.Footer>
                </Modal>
                

            </Card>
        );
    }
}

export default UserProfile;