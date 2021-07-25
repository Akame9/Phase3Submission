package com.example.userapplication.userapp.model;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "companyEntity")
public class companyEntity {
    
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String companyName;

    @Column(nullable = false)
    private String ceo;

    @Column(nullable = false)
    private String boardOfDirectors;

    @Column(nullable = false)
    private double turnover;

    private String companyBrief;

    private String sectorName;

    @OneToMany(targetEntity = companyStockExchangeMap.class, mappedBy = "company",cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<companyStockExchangeMap> companystockexchangemap;

    @ManyToOne(fetch = FetchType.LAZY)
    @JsonIgnore
    private sector sector;

    @OneToMany(targetEntity = stockPrice.class, mappedBy = "company",cascade = CascadeType.REMOVE)
    @JsonIgnore
    private List<stockPrice> stockprice;

    
    @OneToOne(fetch = FetchType.LAZY, mappedBy = "company",cascade = CascadeType.REMOVE)
    @JsonIgnore
    private ipoDetails ipodetails;

    public List<stockPrice> getStockprice() {
        return stockprice;
    }


    public void setStockprice(List<stockPrice> stockprice) {
        this.stockprice = stockprice;
    }

    public String getSectorName() {
        return sectorName;
    }


    public void setSectorName(String sectorName) {
        this.sectorName = sectorName;
    }

    public ipoDetails getIpodetails() {
        return ipodetails;
    }


    public void setIpodetails(ipoDetails ipodetails) {
        this.ipodetails = ipodetails;
    }

    public sector getSector() {
        return sector;
    }


    public void setSector(sector sector) {
        this.sector = sector;
    }


    public List<companyStockExchangeMap> getCompanystockexchangemap() {
        return companystockexchangemap;
    }


    public void setCompanystockexchangemap(List<companyStockExchangeMap> companystockexchangemap) {
        this.companystockexchangemap = companystockexchangemap;
    }

    
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

    public String getCeo() {
        return ceo;
    }

    public void setCeo(String ceo) {
        this.ceo = ceo;
    }

    public String getBoardOfDirectors() {
        return boardOfDirectors;
    }

    public void setBoardOfDirectors(String boardOfDirectors) {
        this.boardOfDirectors = boardOfDirectors;
    }

    public double getTurnover() {
        return turnover;
    }

    public void setTurnover(double turnover) {
        this.turnover = turnover;
    }

    public String getCompanyBrief() {
        return companyBrief;
    }

    public void setCompanyBrief(String companyBrief) {
        this.companyBrief = companyBrief;
    }

    public companyEntity(){

    }
    public companyEntity(String companyName, String ceo, String boardOfDirectors, double turnover,
            String companyBrief, String sectorName) {
        
        this.companyName = companyName;
        this.ceo = ceo;
        this.boardOfDirectors = boardOfDirectors;
        this.turnover = turnover;
        this.companyBrief = companyBrief;
        this.sectorName = sectorName;
    }

}
