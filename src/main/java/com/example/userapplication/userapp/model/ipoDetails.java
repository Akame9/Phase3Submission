package com.example.userapplication.userapp.model;

import java.time.LocalDateTime;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.ManyToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

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
    private LocalDateTime openDateTime;

    @Column(nullable = false)
    private String companyName;

    
    @OneToOne(fetch = FetchType.LAZY)
    private companyEntity company;

    @ManyToMany
    private List<stockExchange> stockexchange;

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

    public LocalDateTime getOpenDateTime() {
        return openDateTime;
    }

    public void setOpenDateTime(LocalDateTime openDateTime) {
        this.openDateTime = openDateTime;
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
    public ipoDetails(double pricePerShare, Long totalNumberOfShare, LocalDateTime openDateTime, String companyName) {
        super();
        this.pricePerShare = pricePerShare;
        this.totalNumberOfShare = totalNumberOfShare;
        this.openDateTime = openDateTime;
        this.companyName = companyName;
    }

    


}
