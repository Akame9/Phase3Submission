import axios from 'axios';

const USER_API_BASE_URL = "http://localhost:8080";

//const USER_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class Userservices {

    signup(user){
        return axios.post(USER_API_BASE_URL+"/signup",user);
    }

    signin(user,token){
        return axios.get(USER_API_BASE_URL+"/login/"+user.username+"/"+user.password,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    getuser(userId,token){
        return axios.get(USER_API_BASE_URL + "/viewprofile/" + userId,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    updateuser(userId,password,token){
        return axios.get(USER_API_BASE_URL + "/updateprofile/" + userId + "/" + password,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    authenticateuser(user){
        return axios.post(USER_API_BASE_URL + "/authenticate",user,{
            headers :{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Vary': 'Origin'.replace,
                'Accept': 'application/json',
            }
        });
    }
}

export default new Userservices()