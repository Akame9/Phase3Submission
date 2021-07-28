import axios from 'axios';

//const SC_API_BASE_URL = "http://localhost:8080";
const SC_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class Setstockcodeservice {

    addsc(sc,token){
        return axios.post(SC_API_BASE_URL+"/insertcse", sc,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    getsc(token){
        return axios.get(SC_API_BASE_URL+"/getallstockcode",{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    
}

export default new Setstockcodeservice()
