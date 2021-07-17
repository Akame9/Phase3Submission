package com.example.userapplication.userapp.controllers;

import java.util.List;

import com.example.userapplication.userapp.model.ipoDetails;
import com.example.userapplication.userapp.services.ipoServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class ipoController {

    @Autowired
    private ipoServices iposervices;

    @RequestMapping(value = "/ipodetails",method = RequestMethod.GET)
    public List<ipoDetails> showIpo(){

        return iposervices.showIpo();
    }
    
}
