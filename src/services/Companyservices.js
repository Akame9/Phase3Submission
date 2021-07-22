import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:8080";

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

    getstockprice(companyName, from, to){
        return axios.get(COMPANY_API_BASE_URL + '/companystockprice/' + companyName + "/" + from + "/" + to);
    }

}

export default new Companyservices();