package com.example.userapplication.userapp.services;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.repository.companyRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class companyServices {

    @Autowired
    private companyRepository companyrepository;

    public void insertCompany(companyEntity company){
        companyrepository.save(company);
    }

    

}
