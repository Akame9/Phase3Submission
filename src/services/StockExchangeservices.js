import axios from 'axios';

const SE_API_BASE_URL = "http://localhost:8080";

class SEservices {

    getse(){
        return axios.get(SE_API_BASE_URL+"/viewstockexchange");
    }

    addse(se){
        return axios.post(SE_API_BASE_URL+"/insertstockexchange", se);
    }
    
}

export default new SEservices()
