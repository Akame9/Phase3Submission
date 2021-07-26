import axios from 'axios';

const SE_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

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
