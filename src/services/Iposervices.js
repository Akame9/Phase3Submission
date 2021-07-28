import axios from 'axios';

//const IPO_API_BASE_URL = "http://localhost:8080";
const IPO_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class Iposervices {

    getipos(token){
        return axios.get(IPO_API_BASE_URL+"/listipo",{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    addipo(ipo,token){
        return axios.post(IPO_API_BASE_URL+"/addipo", ipo,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    updateipo(ipoId, newipo,token){
        return axios.post(IPO_API_BASE_URL + "/updateipo/" + ipoId, newipo,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    getIpoById(ipoId,token){
        return axios.get(IPO_API_BASE_URL + '/getipobyid/' + ipoId,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }


    deleteipo(ipoId,token){
        return axios.delete(IPO_API_BASE_URL + '/deleteipo/' + ipoId,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    getipofromto(from,to, token){
        return axios.get(IPO_API_BASE_URL+'/getipofromandto/'+from+'/'+to,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });

    }

    
}

export default new Iposervices()
