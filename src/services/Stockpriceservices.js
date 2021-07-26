import axios from 'axios';

const SP_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class Stockpriceservices {

    getsp(){
        return axios.get(SP_API_BASE_URL+"/viewstockprice");
    }

    addsp(sp){
        return axios.post(SP_API_BASE_URL+"/insertstockprice", sp,
        {
            headers: {
                'Content-Type': 'application/json',
            }
        });
    }

    getlatestsp(){
        return axios.get(SP_API_BASE_URL+"/getlatestshareprice");
    }
}
export default new Stockpriceservices()