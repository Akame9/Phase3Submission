import axios from 'axios';

const COMPANY_API_BASE_URL = "http://localhost:8080";

//const COMPANY_API_BASE_URL = "https://aathiraspringbootphase3.herokuapp.com";

class Companyservices {

    getcompany(token){
        return axios.get(COMPANY_API_BASE_URL+"/companylist/",{
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin' : '*',
                'Vary': 'Origin' ,
                "Authorization" : "Bearer "+token
            }
          });
    }

    addcompany(company,token){
        return axios.post(COMPANY_API_BASE_URL+"/company", company,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    updatecompany(companyId, newcompany, token){
        return axios.put(COMPANY_API_BASE_URL + "/updatecompany/" + companyId, newcompany,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    getCompanyById(companyId, token){
        return axios.get(COMPANY_API_BASE_URL + '/getcompanybyid/' + companyId,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    deleteCompany(companyId, token){
        return axios.delete(COMPANY_API_BASE_URL + '/deletecompany/' + companyId,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    getstockprice(companyName, stockExchangeName, from, to, token){
        return axios.get(COMPANY_API_BASE_URL + '/companystockprice/' + companyName + "/" + stockExchangeName + "/" + from + "/" + to,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    getlateststockpriceforcompany(companyName, token){
        return axios.get(COMPANY_API_BASE_URL+'/getlatestsharepriceforcompany/'+companyName,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }


    getbycompanyName(companyName, token){

        return axios.get(COMPANY_API_BASE_URL + '/companydetails/' + companyName,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });

    }

    getcompanyipo(companyName, token){
        return axios.get(COMPANY_API_BASE_URL+ '/getcompanyipo/' + companyName,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });
    }

    getcompanycse(companyName, token){
        return axios.get(COMPANY_API_BASE_URL + '/getcompanycse/' + companyName,{
            headers: {
                "Authorization" : "Bearer "+token
            }
        });

    }

    
}

export default new Companyservices();