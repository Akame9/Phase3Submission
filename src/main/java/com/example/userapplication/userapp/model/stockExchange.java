package com.example.userapplication.userapp.model;

import java.util.List;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name = "stockExchange")
public class stockExchange {

    @Id
    @GeneratedValue
    private Long id;

    private String stockExchangeName;
    private String stockExchangeBrief;

    @OneToMany(targetEntity = companyStockExchangeMap.class)
    private List<companyStockExchangeMap> companystockexchangemap;

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getStockExchangeName() {
        return stockExchangeName;
    }

    public void setStockExchangeName(String stockExchangeName) {
        this.stockExchangeName = stockExchangeName;
    }

    public String getStockExchangeBrief() {
        return stockExchangeBrief;
    }

    public void setStockExchangeBrief(String stockExchangeBrief) {
        this.stockExchangeBrief = stockExchangeBrief;
    }

    public List<companyStockExchangeMap> getCompanystockexchangemap() {
        return companystockexchangemap;
    }

    public void setCompanystockexchangemap(List<companyStockExchangeMap> companystockexchangemap) {
        this.companystockexchangemap = companystockexchangemap;
    }

    protected stockExchange(){
        
    }
    public stockExchange(String stockExchangeName, String stockExchangeBrief) {
        
        this.stockExchangeName = stockExchangeName;
        this.stockExchangeBrief = stockExchangeBrief;
    }

    
    
}
