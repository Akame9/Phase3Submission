package com.example.userapplication.userapp.tests;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import com.example.userapplication.userapp.controllers.companyController;
import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.repository.companyRepository;
import com.example.userapplication.userapp.services.companyServices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class testcompanyService {

    @Autowired
    private companyRepository cmprepo;

    @Autowired
    private companyServices cmpservices;

    @Autowired
    private companyController cmpcontroller;

    @Test
    public void testinsertCompany(){

        companyEntity cmp = new companyEntity();

        cmp.setId(1L);
        cmp.setCompanyName("Reliance");
        cmp.setCeo("Mukash Ambani");
        cmp.setBoardOfDirectors("Nita Ambani");
        cmp.setCompanyBrief("Retail Company");
        cmp.setSectorName("Retail");
        cmp.setTurnover(6.38);
        
        cmpservices.insertCompany(cmp);

        assertNotNull(cmprepo.findById(cmp.getId()).get());

    }

    @Test
    public void testcompanyDetails(){
        companyEntity cmp = new companyEntity();

        cmp.setId(1L);
        cmp.setCompanyName("Reliance");
        cmp.setCeo("Mukash Ambani");
        cmp.setBoardOfDirectors("Nita Ambani");
        cmp.setCompanyBrief("Retail Company");
        cmp.setSectorName("Retail");
        cmp.setTurnover(6.38);
        
        cmprepo.save(cmp);
        companyEntity result = cmpcontroller.companyDetails(cmp.getCompanyName());
        assertThat(result.getId()).isEqualTo(cmp.getId());
    }
    
    @Test
    public void testcompanyLists(){
        companyEntity cmp = new companyEntity();

        cmp.setId(1L);
        cmp.setCompanyName("Reliance");
        cmp.setCeo("Mukash Ambani");
        cmp.setBoardOfDirectors("Nita Ambani");
        cmp.setCompanyBrief("Retail Company");
        cmp.setSectorName("Retail");
        cmp.setTurnover(6.38);
        
        cmprepo.save(cmp);
        
        List<companyEntity> result = cmpcontroller.companyList();
        
        assertThat(result.size()).isEqualTo(1);

    }

    @Test
    public void testgetCompany(){

        companyEntity cmp = new companyEntity();

        cmp.setId(1L);
        cmp.setCompanyName("Reliance");
        cmp.setCeo("Mukash Ambani");
        cmp.setBoardOfDirectors("Nita Ambani");
        cmp.setCompanyBrief("Retail Company");
        cmp.setSectorName("Retail");
        cmp.setTurnover(6.38);
        
        cmprepo.save(cmp);
        
        companyEntity result = cmpservices.getcompany(1L);
        assertThat(result.getId()).isEqualTo(cmp.getId());

    }

    @Test
    public void testdeleteCompany(){

        companyEntity cmp = new companyEntity();

        cmp.setId(1L);
        cmp.setCompanyName("Reliance");
        cmp.setCeo("Mukash Ambani");
        cmp.setBoardOfDirectors("Nita Ambani");
        cmp.setCompanyBrief("Retail Company");
        cmp.setSectorName("Retail");
        cmp.setTurnover(6.38);
        
        cmprepo.save(cmp);
        
        cmpservices.deleteCompany(cmp.getId());

        assertThat(cmprepo.existsById(1L)).isFalse();


    }
}
