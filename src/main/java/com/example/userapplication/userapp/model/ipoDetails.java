package com.example.userapplication.userapp.model;

import java.sql.Date;
import java.sql.Time;
import java.util.ArrayList;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "ipoDetails")
public class ipoDetails {

    @Id
    @GeneratedValue
    private Long id;

    @Column(nullable = false)
    private double pricePerShare;
    
    @Column(nullable = false)
    private Long totalNumberOfShare;

    @Column(nullable = false)
    private Date date;

    @Column(nullable = false)
    private Time time;

    @Column(nullable = false)
    private String companyName;

    
    @OneToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private companyEntity company;

    @ManyToMany(fetch = FetchType.LAZY)
    private List<stockExchange> stockexchange = new ArrayList<>();


    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
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

    public String getCompanyName() {
        return companyName;
    }

    public void setCompanyName(String companyName) {
        this.companyName = companyName;
    }

    public double getPricePerShare() {
        return pricePerShare;
    }

    public void setPricePerShare(double pricePerShare) {
        this.pricePerShare = pricePerShare;
    }

    public Long getTotalNumberOfShare() {
        return totalNumberOfShare;
    }

    public void setTotalNumberOfShare(Long totalNumberOfShare) {
        this.totalNumberOfShare = totalNumberOfShare;
    }

    public companyEntity getCompany() {
        return company;
    }

    public void setCompany(companyEntity company) {
        this.company = company;
    }

    public List<stockExchange> getStockexchange() {
        return stockexchange;
    }

    public void setStockexchange(List<stockExchange> stockexchange) {
        this.stockexchange = stockexchange;
    }

    public ipoDetails(){
        
    }
    public ipoDetails(double pricePerShare, Long totalNumberOfShare, Date date, Time time, String companyName) {
        super();
        this.pricePerShare = pricePerShare;
        this.totalNumberOfShare = totalNumberOfShare;
        this.date = date;
        this.time = time;
        this.companyName = companyName;
        
    }

    


}
