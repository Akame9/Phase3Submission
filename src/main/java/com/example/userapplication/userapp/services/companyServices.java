package com.example.userapplication.userapp.services;

import java.util.List;

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

    public companyEntity companyInfo(String companyName){

        companyEntity company = companyrepository.findBycompanyName(companyName);
        return company;
    }

    public List<companyEntity> companyList(){
        List<companyEntity> companylist = companyrepository.findAll();
        return companylist;
    }

    public companyEntity getcompany(Long companyId){

        return companyrepository.getById(companyId);

    }

}
