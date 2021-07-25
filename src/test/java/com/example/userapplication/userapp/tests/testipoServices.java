package com.example.userapplication.userapp.tests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;

import java.sql.Date;
import java.sql.Time;
import java.util.List;

import com.example.userapplication.userapp.model.ipoDetails;
import com.example.userapplication.userapp.repository.ipoDetailsRepository;
import com.example.userapplication.userapp.services.ipoServices;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class testipoServices {


    @Autowired
    private ipoDetailsRepository iporepo;

    @Autowired
    private ipoServices iposervices;

    @Test
    public void testaddIpo(){

        Date d = new Date(2021-10-13);
        long milli = 123456789999l;
        Time t = new Time(milli);
        ipoDetails ipo = new ipoDetails();
        ipo.setId(1L);
        ipo.setCompanyName("Reliance");
        ipo.setDate(d);
        ipo.setTime(t);
        ipo.setPricePerShare(10.23);
        ipo.setTotalNumberOfShare(100L);

        iposervices.addIpo(ipo);
        assertNotNull(iporepo.findById(1L).get());

    }

    @Test
    public void testshowAll(){
        Date d = new Date(2021-10-13);
        long milli = 123456789999l;
        Time t = new Time(milli);
        ipoDetails ipo = new ipoDetails();
        ipo.setId(1L);
        ipo.setCompanyName("Reliance");
        ipo.setDate(d);
        ipo.setTime(t);
        ipo.setPricePerShare(10.23);
        ipo.setTotalNumberOfShare(100L);

        iporepo.save(ipo);

        List<ipoDetails> result = iposervices.showIpo();
        assertEquals(ipo.getId(),result.get(0).getId());

    }

    @Test
    public void testdeleteIpo(){
        Date d = new Date(2021-10-13);
        long milli = 123456789999l;
        Time t = new Time(milli);
        ipoDetails ipo = new ipoDetails();
        ipo.setId(1L);
        ipo.setCompanyName("Reliance");
        ipo.setDate(d);
        ipo.setTime(t);
        ipo.setPricePerShare(10.23);
        ipo.setTotalNumberOfShare(100L);

        iporepo.save(ipo);
        iposervices.deleteIpo(1L);
        assertThat(iporepo.existsById(1L)).isFalse();
    }

    @Test
    public void testgetIpo(){
        Date d = new Date(2021-10-13);
        long milli = 123456789999l;
        Time t = new Time(milli);
        ipoDetails ipo = new ipoDetails();
        ipo.setId(1L);
        ipo.setCompanyName("Reliance");
        ipo.setDate(d);
        ipo.setTime(t);
        ipo.setPricePerShare(10.23);
        ipo.setTotalNumberOfShare(100L);

        iporepo.save(ipo);
        ipoDetails result = iposervices.getIpo(ipo.getId());
        assertEquals(1L,result.getId());
    }

    @Test
    public void testgetIpoFromAndTo(){
        
        String str="2021-10-13";  
        Date d=Date.valueOf(str);
        long milli = 123456789999l;
        Time t = new Time(milli);
        ipoDetails ipo = new ipoDetails();
        ipo.setId(1L);
        ipo.setCompanyName("Reliance");
        ipo.setDate(d);
        ipo.setTime(t);
        ipo.setPricePerShare(10.23);
        ipo.setTotalNumberOfShare(100L);

        String str1="2021-10-21";  
        Date d1=Date.valueOf(str1);
        iporepo.save(ipo);
        List<ipoDetails> result = iposervices.getIpoFromAndTo(d,d1);
        assertEquals(ipo.getId(),result.get(0).getId());
        
    }
    
}
