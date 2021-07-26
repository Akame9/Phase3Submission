package com.example.userapplication.userapp.controllers;

import java.net.URI;
import java.util.List;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.model.companyStockExchangeMap;
import com.example.userapplication.userapp.model.stockExchange;
import com.example.userapplication.userapp.services.companyStockExchangeMapServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "https://aathiraphase3reactfrontend.herokuapp.com")
@RestController
public class companyStockExchangeMapController {

    @Autowired
    private companyStockExchangeMapServices cseservices;

    @RequestMapping(value = "/insertcse",method = RequestMethod.POST)
    public ResponseEntity<Object> insertcse(@RequestBody companyStockExchangeMap cse){

        
        String cmpuri = "https://aathiraspringbootphase3.herokuapp.com/companydetails/"+cse.getCompanyName();
	    RestTemplate cmprestTemplate = new RestTemplate();
	    companyEntity company = cmprestTemplate.getForObject(cmpuri, companyEntity.class);
        cse.setCompany(company);

        String stkuri = "https://aathiraspringbootphase3.herokuapp.com/getstockexchange/"+cse.getStockExchangeName();
	    RestTemplate stkrestTemplate = new RestTemplate();
	    stockExchange stockexchange = stkrestTemplate.getForObject(stkuri, stockExchange.class);
        cse.setStockExchange(stockexchange);
        
        cseservices.addcse(cse);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(cse.getId()).toUri();
        return ResponseEntity.created(location).build();


    }

    @RequestMapping(value = "/getcsecompanyName/{stockcode}",method = RequestMethod.GET)
    @ResponseBody
    public String getcseCompanyName(@PathVariable Long stockcode){
        return cseservices.getcseCompanyName(stockcode);
    }

    @RequestMapping(value = "/getstockcodes/{companyName}",method = RequestMethod.GET)
    @ResponseBody
    public List<companyStockExchangeMap> getstockcodes(@PathVariable String companyName){

        return cseservices.getstockcodes(companyName);

    }

    @RequestMapping(value = "/getallstockcode", method = RequestMethod.GET)
    @ResponseBody
    public List<companyStockExchangeMap> viewall(){
        List<companyStockExchangeMap> cse = cseservices.showlists();

        return  cse;

    }

    
}
