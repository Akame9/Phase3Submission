import axios from 'axios';

const SC_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class Setstockcodeservice {

    addsc(sc){
        return axios.post(SC_API_BASE_URL+"/insertcse", sc);
    }

    getsc(){
        return axios.get(SC_API_BASE_URL+"/getallstockcode");
    }

    
}

export default new Setstockcodeservice()
