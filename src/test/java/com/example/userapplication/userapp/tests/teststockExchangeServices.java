package com.example.userapplication.userapp.tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.util.List;

import com.example.userapplication.userapp.model.stockExchange;
import com.example.userapplication.userapp.repository.stockExchangeRepository;
import com.example.userapplication.userapp.services.stockExchangeServices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class teststockExchangeServices {

    @Autowired
    private stockExchangeRepository serepo;

    @Autowired
    private stockExchangeServices seservices;

    @Test
    public void testaddStockExchange(){

        stockExchange se = new stockExchange();
        se.setId(1L);
        se.setStockExchangeName("NSE");
        se.setStockExchangeBrief("National Stock Exchange");
        
        seservices.addStockExchange(se);
        assertNotNull(serepo.findById(1L).get());
    }

    @Test
    public void testshowStockExchange(){

        stockExchange se = new stockExchange();
        se.setId(1L);
        se.setStockExchangeName("NSE");
        se.setStockExchangeBrief("National Stock Exchange");
        
        serepo.save(se);

        List<stockExchange> result = seservices.showStockExchange();
        assertEquals(1L,result.get(0).getId());

    }

    @Test
    public void testInfostockExchange(){
        stockExchange se = new stockExchange();
        se.setId(1L);
        se.setStockExchangeName("NSE");
        se.setStockExchangeBrief("National Stock Exchange");
        
        serepo.save(se);
        stockExchange result = seservices.InfostockExchange(se.getStockExchangeName());
        assertEquals(1L,result.getId());

    }
}
