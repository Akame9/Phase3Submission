package com.example.userapplication.userapp.repository;

import java.sql.Date;
import java.util.List;

import com.example.userapplication.userapp.model.stockPrice;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface stockPriceRepository extends JpaRepository<stockPrice,Long> {
    
    @Query(value = "SELECT * from stock_Price WHERE stock_Code=?1 AND (date BETWEEN ?2 AND ?3)",nativeQuery = true)
    public List<stockPrice> findBystockCode(Long stockcode,Date from,Date to);


}
