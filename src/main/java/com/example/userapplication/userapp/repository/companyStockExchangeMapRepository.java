package com.example.userapplication.userapp.repository;

import java.util.List;

import com.example.userapplication.userapp.model.companyStockExchangeMap;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface companyStockExchangeMapRepository extends JpaRepository<companyStockExchangeMap,Long> {
   
    public companyStockExchangeMap findBystockCode(Long stockCode);

    public List<companyStockExchangeMap> findByCompanyName(String companyName);

    @Query(value = "SELECT company_Name FROM company_Stock_Exchange_Map WHERE stock_Exchange_Name=?1",nativeQuery = true)
    public List<String> findByStockExchangeName(String stockExchangeName);
}
