package com.example.userapplication.userapp.model;

import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import com.fasterxml.jackson.annotation.JsonIgnore;

@Entity
@Table(name = "sector")
public class sector {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private Long id;

    @Column(nullable = false)
    private String sectorName;

    private String sectorBrief;

    @OneToMany(mappedBy = "sector")
    @JsonIgnore
    private List<companyEntity> company;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getSectorName() {
        return sectorName;
    }

    public void setSectorName(String sectorName) {
        this.sectorName = sectorName;
    }

    public String getSectorBrief() {
        return sectorBrief;
    }

    public void setSectorBrief(String sectorBrief) {
        this.sectorBrief = sectorBrief;
    }

    public List<companyEntity> getCompany() {
        return company;
    }

    public void setCompany(List<companyEntity> company) {
        this.company = company;
    }

    public sector(){
        
    }
    public sector(String sectorName, String sectorBrief) {
        this.sectorName = sectorName;
        this.sectorBrief = sectorBrief;
    }
        
}
