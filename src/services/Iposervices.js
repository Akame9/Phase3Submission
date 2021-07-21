import axios from 'axios';

const IPO_API_BASE_URL = "http://localhost:8080/ipocontroller";

class Iposervices {

    getipos(){
        return axios.get(IPO_API_BASE_URL+"/listipo");
    }

    addipo(ipo){
        return axios.post(IPO_API_BASE_URL+"/addipo", ipo);
    }

    updateipo(ipoId, newipo){
        return axios.post(IPO_API_BASE_URL + "/updateipo/" + ipoId, newipo);
    }

    getIpoById(ipoId){
        return axios.get(IPO_API_BASE_URL + '/getipobyid/' + ipoId);
    }


    deleteipo(ipoId){
        return axios.delete(IPO_API_BASE_URL + '/deleteipo/' + ipoId);
    }

    
}

export default new Iposervices()
