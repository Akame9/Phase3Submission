package com.example.userapplication.userapp.controllers;

import java.net.URI;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.model.companyStockExchangeMap;
import com.example.userapplication.userapp.model.sector;
import com.example.userapplication.userapp.model.stockPrice;
import com.example.userapplication.userapp.services.companyServices;
import com.example.userapplication.userapp.services.companyStockExchangeMapServices;
import com.example.userapplication.userapp.services.sectorServices;
import com.example.userapplication.userapp.services.stockPriceServices;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin
//@CrossOrigin(origins = "https://aathiraphase3reactfrontend.herokuapp.com")
@RestController
public class sectorController {

    @Autowired
    private sectorServices sectorservices;

    @Autowired
    private stockPriceServices stockpriceservices;

    @Autowired
    private companyStockExchangeMapServices cseservices;



    @RequestMapping(value = "/sector",method = RequestMethod.POST)
    public ResponseEntity<Object> insertSector(@RequestBody sector sector){

        sectorservices.addSector(sector);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(sector.getId()).toUri();

        return ResponseEntity.created(location).build();

    }

    @RequestMapping(value = "/sectordetails/{sectorName}",method = RequestMethod.GET)
    @ResponseBody
    public sector viewSector(@PathVariable String sectorName) {
      return sectorservices.showSector(sectorName);
        
    }

    @RequestMapping(value = "/sectordetails/{sectorId}",method = RequestMethod.DELETE)
    public void removeSector(@PathVariable Long sectorId){

        sectorservices.deleteSector(sectorId);

    }

    @RequestMapping(value = "/listsectorcompanies/{sectorName}", method = RequestMethod.GET)
    public List<companyEntity> listSectorCompanies(@PathVariable String sectorName){
        sector sector = sectorservices.showSector(sectorName);
        return sector.getCompany();
    }

    @RequestMapping(value = "/getsectorprice/{sectorName}/{from}/{to}", method = RequestMethod.GET)
    // @ResponseBody
    public double getSectorPrice(@PathVariable("sectorName") String sectorName,
    @PathVariable("from") Date from, @PathVariable("to") Date to){

        List<companyEntity> company = sectorservices.showSector(sectorName).getCompany();
        
        double avg = 0;
        int count = 0;
        for(companyEntity c : company){

            List<companyStockExchangeMap> stockcodelist = cseservices.getstockcodes(c.getCompanyName());
            //Long stockcode = cseservices.getuniquestockcode(c.getCompanyName(),"NSE");

            //List<stockPrice> stkp = c.getStockprice();
            //for(stockPrice sp : stkp){
                List<stockPrice> stockprice = stockpriceservices.getStockPrice(stockcodelist.get(0).getStockCode(), from, to);
                for(stockPrice stockp : stockprice){

                    avg += stockp.getSharePrice();
                    count++;

                }
                
            //}

        }
        return avg/count;

    }

    @RequestMapping(value = "/getsector", method = RequestMethod.GET)
    public List<sector> getsectors(){

        return sectorservices.getSector();

    }
}
