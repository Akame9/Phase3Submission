package com.example.userapplication.userapp.model;

import java.sql.Time;
import java.time.LocalDateTime;
import java.sql.Date;

import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "stockPrice")
public class stockPrice {

    @Id
    @GeneratedValue
    private Long id;

    private double sharePrice;
    
    private Date date;
    private Time time;
    
    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private companyEntity company;

    private String stockExchangeName;
    private Long stockCode;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }

    public double getSharePrice() {
        return sharePrice;
    }
    public void setSharePrice(double sharePrice) {
        this.sharePrice = sharePrice;
    }
   
    public Date getDate() {
        return date;
    }
    public void setDate(Date date) {
        this.date = date;
    }
    public Time getTime() {
        return time;
    }
    public void setTime(Time time) {
        this.time = time;
    }
    
    public companyEntity getCompany() {
        return company;
    }
    public void setCompany(companyEntity company) {
        this.company = company;
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
    public stockPrice(){
        
    }
    public stockPrice(double sharePrice, Date date, Time time, LocalDateTime localdatetime, companyEntity company,
            String stockExchangeName, Long stockCode) {
        this.sharePrice = sharePrice;
        this.date = date;
        this.time = time;
        this.stockExchangeName = stockExchangeName;
        this.stockCode = stockCode;
    }

    

    
}
