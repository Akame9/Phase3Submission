package com.example.userapplication.userapp.services;

import java.util.List;

import com.example.userapplication.userapp.model.stockExchange;
import com.example.userapplication.userapp.repository.stockExchangeRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class stockExchangeServices {

    @Autowired
    private stockExchangeRepository stockexchangerepository;

    public void addStockExchange(stockExchange stockexchange){

        stockexchangerepository.save(stockexchange);

    }

    public List<stockExchange> showStockExchange(){
        return stockexchangerepository.findAll();
    }

    public stockExchange InfostockExchange(String stockExchangeName){
        return stockexchangerepository.findByStockExchangeName(stockExchangeName);

    }
    
}
