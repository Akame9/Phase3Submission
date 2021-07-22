import axios from 'axios';

const SP_API_BASE_URL = "http://localhost:8080";

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
}
export default new Stockpriceservices()