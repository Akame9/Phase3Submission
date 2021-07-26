import axios from 'axios';

const SE_API_BASE_URL = "http://localhost:8080";

class Sectorservices {

    getse(){
        return axios.get(SE_API_BASE_URL+"/getsector");
    }

    addse(se){
        return axios.post(SE_API_BASE_URL+"/sector", se);
    }
    
    getsectorprice(sectorName,from,to){
        return axios.get(SE_API_BASE_URL+"/getsectorprice/"+sectorName+"/"+from+"/"+to);

    }
}

export default new Sectorservices()
