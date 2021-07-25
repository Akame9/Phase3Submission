package com.example.userapplication.userapp.tests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import com.example.userapplication.userapp.model.sector;
import com.example.userapplication.userapp.repository.sectorRepository;
import com.example.userapplication.userapp.services.sectorServices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;


@SpringBootTest
public class testsectorServices {


    @Autowired
    private sectorRepository secrepo;

    @Autowired
    private sectorServices secservices;

    @Test
    public void testaddsector(){

        sector sec = new sector();
        sec.setId(1L);
        sec.setSectorName("Healthcare");
        sec.setSectorBrief("Dealing with health issues");
        
        secservices.addSector(sec);
        assertNotNull(secrepo.findById(1L).get());

    }
    
    @Test
    public void testshowsector(){
        sector sec = new sector();
        sec.setId(1L);
        sec.setSectorName("Healthcare");
        sec.setSectorBrief("Dealing with health issues");
        
        secrepo.save(sec);

        sector result = secservices.showSector(sec.getSectorName());
        assertEquals(1L,result.getId());
    }

    @Test
    public void testdeleteSector(){
        sector sec = new sector();
        sec.setId(1L);
        sec.setSectorName("Healthcare");
        sec.setSectorBrief("Dealing with health issues");
        
        secrepo.save(sec);
        secservices.deleteSector(sec.getId());
        assertThat(secrepo.existsById(1L));

    }

    @Test
    public void testgetSector(){
        sector sec = new sector();
        sec.setId(1L);
        sec.setSectorName("Healthcare");
        sec.setSectorBrief("Dealing with health issues");
        
        secrepo.save(sec);
        
        List<sector> result = secservices.getSector();
        assertEquals(1L,result.get(0).getId());
    }
}
