package com.example.userapplication.userapp.services;

import java.util.List;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.model.companyStockExchangeMap;
import com.example.userapplication.userapp.repository.companyStockExchangeMapRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class companyStockExchangeMapServices {

    @Autowired
    private companyStockExchangeMapRepository cserepository;

    public void addcse(companyStockExchangeMap cse){

        cserepository.save(cse);

    }

    public String getcseCompanyName(Long stockcode){
        companyStockExchangeMap cse = cserepository.findBystockCode(stockcode);
        String companyName = cse.getCompanyName();
        return companyName;
    }

    public List<companyStockExchangeMap> getstockcodes(String companyName){
        
        List<companyStockExchangeMap> stockcodelist = cserepository.findByCompanyName(companyName);
        return stockcodelist;

    }

    public List<String> getCompanyList(String stockExchangeName){

        return cserepository.findByStockExchangeName(stockExchangeName);

    }

    public List<String> getStockExchangeByCompany(String companyName){

        return cserepository.findStockExchangeByCompanyName(companyName);

    }

    public List<companyStockExchangeMap> showlists(){
        List<companyStockExchangeMap> cse = cserepository.findAll();
        return cse;
    }

    public Long getuniquestockcode(String companyName, String stockExchangeName){

        return cserepository.getuniquestockcode(companyName, stockExchangeName);
    }

    
    
}
