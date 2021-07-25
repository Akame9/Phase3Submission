package com.example.userapplication.userapp.tests;

import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

import com.example.userapplication.userapp.model.stockPrice;
import com.example.userapplication.userapp.repository.stockPriceRepository;
import com.example.userapplication.userapp.services.stockPriceServices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class teststockPriceServices {

    @Autowired
    private stockPriceRepository stkprepo;

    @Autowired
    private stockPriceServices stkpservices;

    @Test
    public void testaddStockPrice(){

        String str="2021-10-13";  
        Date d=Date.valueOf(str);
        long milli = 123456789999l;
        Time t = new Time(milli);
        stockPrice stkp = new stockPrice();
        stkp.setId(1L);
        stkp.setDate(d);
        stkp.setTime(t);
        stkp.setSharePrice(25.67);
        stkp.setStockCode(500112L);
        stkp.setStockExchangeName("NSE");

        stkpservices.addStockPrice(stkp);
        assertNotNull(stkprepo.findById(1L).get());
        
    }

    @Test
    public void testshowStockPrice(){
        
        String str="2021-10-13";  
        Date d=Date.valueOf(str);
        long milli = 123456789999l;
        Time t = new Time(milli);
        stockPrice stkp = new stockPrice();
        stkp.setId(1L);
        stkp.setDate(d);
        stkp.setTime(t);
        stkp.setSharePrice(25.67);
        stkp.setStockCode(500112L);
        stkp.setStockExchangeName("NSE");

        stkprepo.save(stkp);

        List<stockPrice> result = stkpservices.showStockPrice();
        assertEquals(1L,result.get(0).getId());
    }

    @Test
    public void testgetStockPrice(){
        
        String str="2021-10-13";  
        Date d=Date.valueOf(str);
        long milli = 123456789999l;
        Time t = new Time(milli);
        stockPrice stkp = new stockPrice();
        stkp.setId(1L);
        stkp.setDate(d);
        stkp.setTime(t);
        stkp.setSharePrice(25.67);
        stkp.setStockCode(500112L);
        stkp.setStockExchangeName("NSE");

        stkprepo.save(stkp);
        String str1="2021-10-21";  
        Date d1=Date.valueOf(str1);
        List<stockPrice> result = stkpservices.getStockPrice(500112L, d, d1);
        assertEquals(1L,result.get(0).getId());

    }

    @Test
    public void testgetLatestStockPrice(){

        String str="2021-10-13";  
        Date d=Date.valueOf(str);
        long milli = 123456789999l;
        Time t = new Time(milli);
        stockPrice stkp = new stockPrice();
        stkp.setId(1L);
        stkp.setDate(d);
        stkp.setTime(t);
        stkp.setSharePrice(25.67);
        stkp.setStockCode(500112L);
        stkp.setStockExchangeName("NSE");

        stkprepo.save(stkp);
    
        String str1="2021-10-21";  
        Date d1=Date.valueOf(str1);
        long milli1 = 123456789999l;
        Time t1 = new Time(milli1);
        stockPrice stkp1 = new stockPrice();
        stkp1.setId(2L);
        stkp1.setDate(d1);
        stkp1.setTime(t1);
        stkp1.setSharePrice(50.67);
        stkp1.setStockCode(500112L);
        stkp1.setStockExchangeName("NSE");

        stkprepo.save(stkp1);

        double result = stkpservices.getLatestStockPrice(500112L);
        assertEquals(50.67,result);

    }
    
}
