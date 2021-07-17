package com.example.userapplication.userapp.controllers;

import java.net.URI;
import java.util.List;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.model.ipoDetails;
import com.example.userapplication.userapp.services.ipoServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@RestController
public class ipoController {

    @Autowired
    private ipoServices iposervices;

    @RequestMapping(value = "/addipo", method = RequestMethod.POST)
    public ResponseEntity<Object> addIpo(@RequestBody @DateTimeFormat(iso = DateTimeFormat.ISO.DATE_TIME) ipoDetails ipo){

        String uri = "http://localhost:8080/companydetails/"+ipo.getCompanyName();
	    RestTemplate restTemplate = new RestTemplate();
	    companyEntity company = restTemplate.getForObject(uri, companyEntity.class);
        ipo.setCompany(company);
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


    
}
