package com.example.userapplication.userapp.model;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

@Entity
@Table(name = "companyStockExchangeMap")
public class companyStockExchangeMap {
    
    @Id
    @GeneratedValue
    private Long id;

    private Long stockCode;
    private String companyName;
    private String stockExchangeName;

    @ManyToOne(fetch = FetchType.LAZY)
    private companyEntity company;

    @ManyToOne(fetch = FetchType.LAZY)
    private stockExchange stockExchange;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public String getStockExchangeName() {
        return stockExchangeName;
    }

    public void setStockExchangeName(String stockExchangeName) {
        this.stockExchangeName = stockExchangeName;
    }

    public Long getStockCode() {
        return stockCode;
    }

    public void setStockCode(Long stockCode) {
        this.stockCode = stockCode;
    }

    public companyEntity getCompany() {
        return company;
    }

    public void setCompany(companyEntity company) {
        this.company = company;
    }

    public stockExchange getStockExchange() {
        return stockExchange;
    }

    public void setStockExchange(stockExchange stockExchange) {
        this.stockExchange = stockExchange;
    }

    protected companyStockExchangeMap(){

    }

    public companyStockExchangeMap(Long stockCode, String companyName, String stockExchangeName) {
        
        this.stockCode = stockCode;
        this.companyName = companyName;
        this.stockExchangeName = stockExchangeName;
    }

    
    

}
