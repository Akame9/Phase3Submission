package com.example.userapplication.userapp.controllers;

import java.net.URI;
import java.sql.Date;
import java.util.ArrayList;
import java.util.List;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.model.companyStockExchangeMap;
import com.example.userapplication.userapp.model.ipoDetails;
import com.example.userapplication.userapp.model.sector;
import com.example.userapplication.userapp.model.stockPrice;
import com.example.userapplication.userapp.services.companyServices;
import com.example.userapplication.userapp.services.companyStockExchangeMapServices;
import com.example.userapplication.userapp.services.stockPriceServices;

import org.json.simple.JSONObject;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.servlet.support.ServletUriComponentsBuilder;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class companyController {

    @Autowired
    private companyServices companyservices;

    @Autowired
    private stockPriceServices stockpriceservices;

    @Autowired
    private companyStockExchangeMapServices cseservices;

    @RequestMapping(value = "/company", method = RequestMethod.POST)
    public ResponseEntity<Object> createCompany(@RequestBody companyEntity company){
      
        String uri = "http://localhost:8080/sectordetails/"+company.getSectorName();
	      RestTemplate restTemplate = new RestTemplate();
	      sector sector = restTemplate.getForObject(uri, sector.class);
        company.setSector(sector);
        companyservices.insertCompany(company);
        URI location = ServletUriComponentsBuilder.fromCurrentRequest().path("/{id}").buildAndExpand(company.getId()).toUri();
        return ResponseEntity.created(location).build();

    }

    @RequestMapping(value = "/companydetails/{companyName}",method = RequestMethod.GET)
    @ResponseBody
    public companyEntity companyDetails(@PathVariable String companyName) {
      return companyservices.companyInfo(companyName);
        
    }

    @RequestMapping(value = "/companylist",method = RequestMethod.GET)
    @ResponseBody
    public List<companyEntity> companyList(){

      return companyservices.companyList();

    }

    @RequestMapping(value = "/companystkprice/{companyName}",method = RequestMethod.GET)
    @ResponseBody
    public List<stockPrice> companyStkPrice(@PathVariable String companyName){
      
      companyEntity company = companyservices.companyInfo(companyName);
      return company.getStockprice();
    }

    @RequestMapping(value = "/companystockprice/{companyName}/{stockExchangeName}/{from}/{to}",method = RequestMethod.GET)
    @ResponseBody
    public List<stockPrice> companyStockPrice(@PathVariable("companyName") String companyName,
    @PathVariable("stockExchangeName") String stockExchangeName,
    @PathVariable("from") Date from,@PathVariable("to") Date to){

      Long stockcode = cseservices.getuniquestockcode(companyName,stockExchangeName);
      
      List<stockPrice> stockprice = stockpriceservices.getStockPrice(stockcode,from, to);
        

      
      /*for(companyStockExchangeMap cse : stockcodes){
        List<stockPrice> stockprice = stockpriceservices.getStockPrice(cse.getStockCode(), from, to);
        sp.addAll(stockprice);

      }*/

      return stockprice;
      
    }

    @RequestMapping(value = "/getcompanyipo/{companyName}",method = RequestMethod.GET)
    @ResponseBody
    public ipoDetails getCompanyIpo(@PathVariable String companyName){

      companyEntity company = companyservices.companyInfo(companyName);
      return company.getIpodetails();

    }

    @RequestMapping(value = "/getcompanycse/{companyName}",method = RequestMethod.GET)
    public List<companyStockExchangeMap> getCompanyCSE(@PathVariable String companyName){

      companyEntity company = companyservices.companyInfo(companyName);
      return company.getCompanystockexchangemap();

    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/updatecompany/{companyId}",method = RequestMethod.PUT)
    public ResponseEntity<companyEntity> updateCompany(@PathVariable Long companyId,
    @RequestBody companyEntity newcompany){

        companyEntity oldcompany = companyservices.getcompany(companyId);

        oldcompany.setCompanyName(newcompany.getCompanyName());
        oldcompany.setCeo(newcompany.getCeo());
        oldcompany.setBoardOfDirectors(newcompany.getBoardOfDirectors());
        oldcompany.setTurnover(newcompany.getTurnover());
        oldcompany.setCompanyBrief(newcompany.getCompanyBrief());
        oldcompany.setSectorName(newcompany.getSectorName());
        String uri = "http://localhost:8080/sectordetails/"+oldcompany.getSectorName();
	      RestTemplate restTemplate = new RestTemplate();
	      sector sector = restTemplate.getForObject(uri, sector.class);
        oldcompany.setSector(sector);
        
        companyservices.insertCompany(oldcompany);
        
        return ResponseEntity.ok(oldcompany);

    }


    @RequestMapping(value = "/getcompanybyid/{companyId}", method = RequestMethod.GET)
    public companyEntity getCompanyById(@PathVariable Long companyId){

      return companyservices.getcompany(companyId);

    }

    @RequestMapping(value = "/deletecompany/{companyId}", method = RequestMethod.DELETE)
    public void deleteCompany(@PathVariable Long companyId){

      companyservices.deleteCompany(companyId);

    }

    @RequestMapping(value = "/getlatestshareprice",method = RequestMethod.GET)
    public ArrayList<JSONObject> latestSharePrice(){

      ArrayList<JSONObject> latestshares = new ArrayList<>();

      List<companyEntity> companies = this.companyList();
      for(companyEntity cmp : companies){

        List<companyStockExchangeMap> stockcodes = cseservices.getstockcodes(cmp.getCompanyName());
        for(companyStockExchangeMap cse : stockcodes){
          double latestsp = stockpriceservices.getLatestStockPrice(cse.getStockCode());
          JSONObject obj = new JSONObject();
          obj.put("companyName", cse.getCompanyName());
          obj.put("stockExchangeName",cse.getStockExchangeName());
          obj.put("sharePrice", latestsp);
          latestshares.add(obj);

        }

      }
      return latestshares;

    }


    @RequestMapping(value = "/getlatestsharepriceforcompany/{companyName}",method = RequestMethod.GET)
    public ArrayList<JSONObject> latestSharePriceForCompany(@PathVariable String companyName){

      ArrayList<JSONObject> latestshares = new ArrayList<>();

      companyEntity company = this.companyDetails(companyName);
      

      List<companyStockExchangeMap> stockcodes = cseservices.getstockcodes(company.getCompanyName());
      for(companyStockExchangeMap cse : stockcodes){
          double latestsp = stockpriceservices.getLatestStockPrice(cse.getStockCode());
          JSONObject obj = new JSONObject();
          obj.put("companyName", cse.getCompanyName());
          obj.put("stockExchangeName",cse.getStockExchangeName());
          obj.put("sharePrice", latestsp);
          latestshares.add(obj);

        }

      
      return latestshares;

    }


}
