package com.example.userapplication.userapp.controllers;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.services.companyServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin
@RestController
public class companyController {

    @Autowired
    private companyServices companyservices;

  //  @Autowired
  //  companyRepository companyrepo;
    

    @RequestMapping(value = "/company", method = RequestMethod.POST)
    public String createCompany(@RequestBody companyEntity company){
        companyservices.insertCompany(company);
        return "Inserted";

    }
}
