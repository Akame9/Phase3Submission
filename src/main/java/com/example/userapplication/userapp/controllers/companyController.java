package com.example.userapplication.userapp.controllers;

import java.net.URI;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.services.companyServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin
@RestController
public class companyController {

    @Autowired
    private companyServices companyservices;

  //  @Autowired
  //  companyRepository companyrepo;
    

    @RequestMapping(value = "/company", method = RequestMethod.POST)
    public ResponseEntity<Object> createCompany(@RequestBody companyEntity company){
        companyservices.insertCompany(company);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(company.getId()).toUri();

        return ResponseEntity.created(location).build();

    }

    @RequestMapping(value = "/companydetails",method = RequestMethod.GET)
    @ResponseBody
    public companyEntity companyDetails(@RequestParam("companyName") String companyName){
      return companyservices.companyInfo(companyName);
        
    }
}
