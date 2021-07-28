import axios from 'axios';

//const SP_API_BASE_URL = "http://localhost:8080";
const SP_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class Stockpriceservices {

    getsp(token){
        return axios.get(SP_API_BASE_URL+"/viewstockprice",{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    addsp(sp,token){
        return axios.post(SP_API_BASE_URL+"/insertstockprice", sp,
        {
            headers: {
                'Content-Type': 'application/json',
                "Authorization" : "Bearer "+token
            }
        });
    }

    getlatestsp(token){
        return axios.get(SP_API_BASE_URL+"/getlatestshareprice",{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }
}
export default new Stockpriceservices()