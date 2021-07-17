package com.example.userapplication.userapp.services;

import java.util.List;

import com.example.userapplication.userapp.model.ipoDetails;
import com.example.userapplication.userapp.repository.ipoDetailsRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ipoServices {

    @Autowired
    private ipoDetailsRepository iporepository;

    public List<ipoDetails> showIpo(){
        return iporepository.findAll();
    }
    
}
