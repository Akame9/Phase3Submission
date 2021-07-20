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
        return axios.put(IPO_API_BASE_URL + "/updateipo/" + ipoId, newipo);
    }

    getIpoById(ipoId){
        return axios.get(IPO_API_BASE_URL + '/getipobyid/' + ipoId);
    }

/*
    deleteEmployee(employeeId){
        return axios.delete(EMPLOYEE_API_BASE_URL + '/' + employeeId);
    }
*/
    
}

export default new Iposervices()
