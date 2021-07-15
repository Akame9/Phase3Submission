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

    private String stockCode;

    @ManyToOne(fetch = FetchType.LAZY)
    private companyEntity company;

    @ManyToOne(fetch = FetchType.LAZY)
    private stockExchange stockexchange;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStockCode() {
        return stockCode;
    }

    public void setStockCode(String stockCode) {
        this.stockCode = stockCode;
    }

    public companyEntity getCompany() {
        return company;
    }

    public void setCompany(companyEntity company) {
        this.company = company;
    }

    public stockExchange getStockexchange() {
        return stockexchange;
    }

    public void setStockexchange(stockExchange stockexchange) {
        this.stockexchange = stockexchange;
    }

    

}
