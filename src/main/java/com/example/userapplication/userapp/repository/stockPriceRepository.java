package com.example.userapplication.userapp.repository;

import com.example.userapplication.userapp.model.stockPrice;

import org.springframework.data.jpa.repository.JpaRepository;

public interface stockPriceRepository extends JpaRepository<stockPrice,Long> {
    
}
