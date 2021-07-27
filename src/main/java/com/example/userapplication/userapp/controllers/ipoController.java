package com.example.userapplication.userapp.controllers;

import java.net.URI;
import java.sql.Date;
import java.util.List;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.model.ipoDetails;
import com.example.userapplication.userapp.model.stockExchange;
import com.example.userapplication.userapp.services.companyServices;
import com.example.userapplication.userapp.services.companyStockExchangeMapServices;
import com.example.userapplication.userapp.services.ipoServices;
import com.example.userapplication.userapp.services.stockExchangeServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
//@RequestMapping("/ipocontroller/")
//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "https://aathiraphase3reactfrontend.herokuapp.com")
public class ipoController {

    @Autowired
    private ipoServices iposervices;

    @Autowired
    private companyStockExchangeMapServices cseservices;

    @Autowired
    private companyServices cmpservices;

    @Autowired
    private stockExchangeServices stkservices;
    


    @RequestMapping(value = "/addipo", method = RequestMethod.POST)
    public ResponseEntity<Object> addIpo(@RequestBody ipoDetails ipo){

        /*String uri = "http://localhost:8080/companydetails/"+ipo.getCompanyName();
	    RestTemplate restTemplate = new RestTemplate();
	    companyEntity company = restTemplate.getForObject(uri, companyEntity.class);
        
        */
        companyEntity company = cmpservices.companyInfo(ipo.getCompanyName());
        ipo.setCompany(company);

        
        List<String> stockexchangeName = cseservices.getStockExchangeByCompany(ipo.getCompanyName());
        for(String se : stockexchangeName){
            
            stockExchange stke = stkservices.InfostockExchange(se);
            ipo.getStockexchange().add(stke);

        }
        

        iposervices.addIpo(ipo);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(ipo.getId()).toUri();
        return ResponseEntity.created(location).build();

    }

    @RequestMapping(value = "/listipo",method = RequestMethod.GET)
    public List<ipoDetails> showIpo(){

        return iposervices.showIpo();
    }

    
    @RequestMapping(value = "/deleteipo/{ipoId}",method = RequestMethod.DELETE)
    public void deleteIpo(@PathVariable Long ipoId){
        iposervices.deleteIpo(ipoId);
    }


    
    @RequestMapping(value = "/updateipo/{ipoId}",method = RequestMethod.POST)
    public ResponseEntity<ipoDetails> updateIpo(@PathVariable Long ipoId,
    @RequestBody ipoDetails newipo){

        ipoDetails oldipo = iposervices.getIpo(ipoId);

        oldipo.setCompanyName(newipo.getCompanyName());
        oldipo.setDate(newipo.getDate());
        oldipo.setTime(newipo.getTime());
        oldipo.setPricePerShare(newipo.getPricePerShare());
        oldipo.setTotalNumberOfShare(newipo.getTotalNumberOfShare());

        iposervices.addIpo(oldipo);
        
        return ResponseEntity.ok(oldipo);

    }

    @RequestMapping(value = "/getipobyid/{ipoId}",method = RequestMethod.GET)
    public ipoDetails getIpoById(@PathVariable Long ipoId){
        return iposervices.getIpo(ipoId);

    }

    @RequestMapping(value = "/getipofromandto/{from}/{to}", method = RequestMethod.GET)
    public List<ipoDetails> getIpoFromAndTo(@PathVariable("from") Date from, 
    @PathVariable("to") Date to){

        return iposervices.getIpoFromAndTo(from, to);
    }
    
}
