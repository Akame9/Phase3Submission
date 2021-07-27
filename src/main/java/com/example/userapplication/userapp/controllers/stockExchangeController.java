package com.example.userapplication.userapp.controllers;

import java.net.URI;
import java.util.List;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.model.stockExchange;
import com.example.userapplication.userapp.services.companyStockExchangeMapServices;
import com.example.userapplication.userapp.services.stockExchangeServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:3000")
//@CrossOrigin(origins = "https://aathiraphase3reactfrontend.herokuapp.com")
@RestController
public class stockExchangeController {

    @Autowired
    private stockExchangeServices stockexchangeservices;

    @Autowired
    private companyStockExchangeMapServices cseservices;


    @RequestMapping(value = "/insertstockexchange",method = RequestMethod.POST)
    public ResponseEntity<Object> insertStockExchange(@RequestBody stockExchange stockexchange){
        stockexchangeservices.addStockExchange(stockexchange);

        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(stockexchange.getId()).toUri();
        return ResponseEntity.created(location).build();

    }

    @RequestMapping(value = "/viewstockexchange", method = RequestMethod.GET)
    public List<stockExchange> viewStockExchange(){
        return stockexchangeservices.showStockExchange();

    }

    @RequestMapping(value = "/getstockexchange/{stockExchangeName}",method = RequestMethod.GET)
    @ResponseBody
    public stockExchange getStockExchange(@PathVariable String stockExchangeName){
        return stockexchangeservices.InfostockExchange(stockExchangeName);

    }


    @RequestMapping(value = "/getcompanylist/{stockExchangeName}", method = RequestMethod.GET)
    //@ResponseBody
    public List<String> getCompanyList(@PathVariable String stockExchangeName){
       
        return cseservices.getCompanyList(stockExchangeName);

    }

    
    
}
