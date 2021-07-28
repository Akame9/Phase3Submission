import axios from 'axios';


//const SE_API_BASE_URL = "http://localhost:8080";
const SE_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class Sectorservices {

    getse(token){
        return axios.get(SE_API_BASE_URL+"/getsector",{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    addse(se,token){
        return axios.post(SE_API_BASE_URL+"/sector", se,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }
    
    getsectorprice(sectorName,from,to,token){
        return axios.get(SE_API_BASE_URL+"/getsectorprice/"+sectorName+"/"+from+"/"+to,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });

    }
}

export default new Sectorservices()
