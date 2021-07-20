import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080/";

class Userservices {

    signup(user){
        return axios.post(USER_API_BASE_URL+"signup",user);
    }

    signin(user){
        return axios.get(USER_API_BASE_URL+"/login/"+user.username+"/"+user.password);
    }
}

export default new Userservices()