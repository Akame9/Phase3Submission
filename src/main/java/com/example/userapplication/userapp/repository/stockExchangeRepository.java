package com.example.userapplication.userapp.repository;

import com.example.userapplication.userapp.model.stockExchange;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface stockExchangeRepository extends JpaRepository<stockExchange,Long> {
    
    public stockExchange findByStockExchangeName(String stockExchangeName);
}
