package com.example.userapplication.userapp.services;

import java.sql.Date;
import java.util.List;

import com.example.userapplication.userapp.model.stockPrice;
import com.example.userapplication.userapp.repository.stockPriceRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class stockPriceServices {

    @Autowired
    private stockPriceRepository stockpricerepository;

    public void addStockPrice(stockPrice stockprice){

        stockpricerepository.save(stockprice);

    }

    public List<stockPrice> showStockPrice(){
        List<stockPrice> stockprice = stockpricerepository.findAll();
        return stockprice;
    }

    public List<stockPrice> getStockPrice(Long stockcode,Date from,Date to){
        
        return stockpricerepository.findBystockCode(stockcode,from,to);

    }

    public Double getLatestStockPrice(Long stockcode){
        return stockpricerepository.getLatestStockPrice(stockcode);
    }
    
}
