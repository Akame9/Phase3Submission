package com.example.userapplication.userapp.controllers;

import java.io.IOException;
import java.net.URI;
import java.sql.Date;
import java.util.List;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.model.companyStockExchangeMap;
import com.example.userapplication.userapp.model.stockPrice;
import com.example.userapplication.userapp.services.companyServices;
import com.example.userapplication.userapp.services.companyStockExchangeMapServices;
import com.example.userapplication.userapp.services.stockPriceServices;

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

//@CrossOrigin(origins = "http://localhost:3000")
@CrossOrigin(origins = "https://aathiraphase3reactfrontend.herokuapp.com")
@RestController
public class stockPriceController {

    @Autowired
    private stockPriceServices stockpriceservices;

    @Autowired
    private companyServices cmpservices;

    @Autowired
    private companyStockExchangeMapServices cseservices;

    @RequestMapping(value = "/insertstockprice", method = RequestMethod.POST)
    public ResponseEntity<Object> insertStockPrice(@RequestBody stockPrice stockprice){
        
        
        /*String uri = "http://localhost:8080/getcsecompanyName/"+stockprice.getStockCode();
	    RestTemplate restTemplate = new RestTemplate();
	    String companyName = restTemplate.getForObject(uri, String.class);*/
        String companyName = cseservices.getcseCompanyName(stockprice.getStockCode());
        
        /*String cmpuri = "http://localhost:8080/companydetails/"+companyName;
	    RestTemplate cmprestTemplate = new RestTemplate();
	    companyEntity company = cmprestTemplate.getForObject(cmpuri, companyEntity.class);
        */
        companyEntity company = cmpservices.companyInfo(companyName);
        stockprice.setCompany(company);
        stockpriceservices.addStockPrice(stockprice);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(stockprice.getId()).toUri();
        return ResponseEntity.created(location).build();


    }

    @RequestMapping(value = "/viewstockprice",method = RequestMethod.GET)
    @ResponseBody
    public List<stockPrice> viewStockPrice() throws ClassNotFoundException, IOException{

        return stockpriceservices.showStockPrice();

    }

    @RequestMapping(value = "/getstockprice/{stockcode}/{from}/{to}",method = RequestMethod.GET)
    @ResponseBody
    public List<stockPrice> getstockPrice(@PathVariable("stockcode") Long stockcode,
    @PathVariable("from") Date from,@PathVariable("to") Date to){

        return stockpriceservices.getStockPrice(stockcode,from,to);
    }

    
    
}
