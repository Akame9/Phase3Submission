import axios from 'axios';

//const SE_API_BASE_URL = "http://localhost:8080";
const SE_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class SEservices {

    getse(token){
        return axios.get(SE_API_BASE_URL+"/viewstockexchange",{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    addse(se,token){
        return axios.post(SE_API_BASE_URL+"/insertstockexchange", se,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }
    
}

export default new SEservices()
