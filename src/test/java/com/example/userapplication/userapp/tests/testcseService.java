package com.example.userapplication.userapp.tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import java.util.ArrayList;
import java.util.List;

import com.example.userapplication.userapp.model.companyStockExchangeMap;
import com.example.userapplication.userapp.repository.companyStockExchangeMapRepository;
import com.example.userapplication.userapp.services.companyStockExchangeMapServices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class testcseService {

    @Autowired
    private companyStockExchangeMapRepository cserepo;

    @Autowired
    private companyStockExchangeMapServices cseservices;


    @Test
    public void testaddcse(){

        companyStockExchangeMap cse = new companyStockExchangeMap();
        cse.setId(1L);
        cse.setCompanyName("Reliance");
        cse.setStockCode(500112L);
        cse.setStockExchangeName("NSE");

        cseservices.addcse(cse);

        assertNotNull(cserepo.findById(1L).get());
        
    }

    @Test
    public void testgetcsecomapnyName(){
        companyStockExchangeMap cse = new companyStockExchangeMap();
        cse.setId(1L);
        cse.setCompanyName("Reliance");
        cse.setStockCode(500112L);
        cse.setStockExchangeName("NSE");

        cserepo.save(cse);

        String name = cseservices.getcseCompanyName(500112L);
        assertEquals("Reliance", name);
    }

    @Test
    public void testgetstockcodes(){
        companyStockExchangeMap cse = new companyStockExchangeMap();
        cse.setId(1L);
        cse.setCompanyName("Reliance");
        cse.setStockCode(500112L);
        cse.setStockExchangeName("NSE");

        cserepo.save(cse);
        List<companyStockExchangeMap> stockcodes = cseservices.getstockcodes("Reliance");
        assertEquals(stockcodes.size(),1);
    }

    @Test
    public void testgetCompanyList(){

        companyStockExchangeMap cse = new companyStockExchangeMap();
        cse.setId(1L);
        cse.setCompanyName("Reliance");
        cse.setStockCode(500112L);
        cse.setStockExchangeName("NSE");

        cserepo.save(cse);

        companyStockExchangeMap cse1 = new companyStockExchangeMap();
        cse1.setId(2L);
        cse1.setCompanyName("NVIDIA");
        cse1.setStockCode(500113L);
        cse1.setStockExchangeName("NSE");

        cserepo.save(cse1);

        List<String> expected = new ArrayList<>();
        expected.add("Reliance");
        expected.add("NVIDIA");
        List<String> result = cseservices.getCompanyList("NSE");
        assertEquals(expected, result);
    }

    @Test
    public void testgetStockExchangeByCompany(){
        companyStockExchangeMap cse = new companyStockExchangeMap();
        cse.setId(1L);
        cse.setCompanyName("Reliance");
        cse.setStockCode(500112L);
        cse.setStockExchangeName("NSE");

        cserepo.save(cse);

        companyStockExchangeMap cse1 = new companyStockExchangeMap();
        cse1.setId(2L);
        cse1.setCompanyName("Reliance");
        cse1.setStockCode(500113L);
        cse1.setStockExchangeName("BSE");

        cserepo.save(cse1);

        List<String> expected = new ArrayList<>();
        expected.add("NSE");
        expected.add("BSE");
        List<String> result = cseservices.getStockExchangeByCompany("Reliance");
        assertEquals(expected,result);
    
    }

    @Test
    public void testshowlists(){
        companyStockExchangeMap cse = new companyStockExchangeMap();
        cse.setId(1L);
        cse.setCompanyName("Reliance");
        cse.setStockCode(500112L);
        cse.setStockExchangeName("NSE");

        cserepo.save(cse);

        List<companyStockExchangeMap> result = cseservices.showlists();
        assertEquals(cse.getId(), result.get(0).getId());

    }
    
    @Test
    public void testgetuniquestockcode(){
        companyStockExchangeMap cse = new companyStockExchangeMap();
        cse.setId(1L);
        cse.setCompanyName("Reliance");
        cse.setStockCode(500112L);
        cse.setStockExchangeName("NSE");

        cserepo.save(cse);
        Long result = cseservices.getuniquestockcode("Reliance", "NSE");
        assertEquals(500112L,result);
    }


}
