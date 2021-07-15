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

@Entity
@Table(name = "stockPrice")
public class stockPrice {

    @Id
    @GeneratedValue
    private Long id;

    private double currentPrice;
    private Date date;
    private Time time;
    private LocalDateTime localdatetime;

    @ManyToOne(fetch = FetchType.LAZY)
    private companyEntity company;

    private String stockExchangeName;
    private String stockCode;

    public Long getId() {
        return id;
    }
    public void setId(Long id) {
        this.id = id;
    }
    public double getCurrentPrice() {
        return currentPrice;
    }
    public void setCurrentPrice(double currentPrice) {
        this.currentPrice = currentPrice;
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
    public LocalDateTime getLocaldatetime() {
        return localdatetime;
    }
    public void setLocaldatetime(LocalDateTime localdatetime) {
        this.localdatetime = localdatetime;
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
    public String getStockCode() {
        return stockCode;
    }
    public void setStockCode(String stockCode) {
        this.stockCode = stockCode;
    }
    protected stockPrice(){
        
    }
    public stockPrice(double currentPrice, Date date, Time time, LocalDateTime localdatetime, companyEntity company,
            String stockExchangeName, String stockCode) {
        this.currentPrice = currentPrice;
        this.date = date;
        this.time = time;
        this.localdatetime = localdatetime;
        this.company = company;
        this.stockExchangeName = stockExchangeName;
        this.stockCode = stockCode;
    }

    

    
}
