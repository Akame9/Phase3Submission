import axios from 'axios';

const COMPANY_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class Companyservices {

    getcompany(){
        return axios.get(COMPANY_API_BASE_URL+"/companylist");
    }

    addcompany(company){
        return axios.post(COMPANY_API_BASE_URL+"/company", company);
    }

    updatecompany(companyId, newcompany){
        return axios.put(COMPANY_API_BASE_URL + "/updatecompany/" + companyId, newcompany);
    }

    getCompanyById(companyId){
        return axios.get(COMPANY_API_BASE_URL + '/getcompanybyid/' + companyId);
    }

    deleteCompany(companyId){
        return axios.delete(COMPANY_API_BASE_URL + '/deletecompany/' + companyId);
    }

    getstockprice(companyName, stockExchangeName, from, to){
        return axios.get(COMPANY_API_BASE_URL + '/companystockprice/' + companyName + "/" + stockExchangeName + "/" + from + "/" + to);
    }

    getlateststockpriceforcompany(companyName){
        return axios.get(COMPANY_API_BASE_URL+'/getlatestsharepriceforcompany/'+companyName);
    }


    getbycompanyName(companyName){

        return axios.get(COMPANY_API_BASE_URL + '/companydetails/' + companyName);

    }

    getcompanyipo(companyName){
        return axios.get(COMPANY_API_BASE_URL+ '/getcompanyipo/' + companyName);
    }

    getcompanycse(companyName){
        return axios.get(COMPANY_API_BASE_URL + '/getcompanycse/' + companyName);

    }

    
}

export default new Companyservices();