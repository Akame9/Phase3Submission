package com.example.userapplication.userapp.controllers;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.repository.companyRepository;

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
    companyRepository companyrepo;

    @RequestMapping(value = "/company", method = RequestMethod.POST)
    public void createCompany(@RequestBody companyEntity company){
        companyrepo.save(company);
    }
}
