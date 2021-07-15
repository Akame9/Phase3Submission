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

    @OneToMany(targetEntity = companyStockExchangeMap.class)
    private List<companyStockExchangeMap> companystockexchangemap;

    @ManyToOne(fetch = FetchType.LAZY)
    private sector sector;

    @OneToOne(fetch = FetchType.LAZY, mappedBy = "company",cascade = CascadeType.REMOVE)
    private ipoDetails ipodetails;

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

    protected companyEntity(){

    }
    public companyEntity(String companyName, String ceo, String boardOfDirectors, double turnover,
            String companyBrief) {
        this.companyName = companyName;
        this.ceo = ceo;
        this.boardOfDirectors = boardOfDirectors;
        this.turnover = turnover;
        this.companyBrief = companyBrief;
    }

}
