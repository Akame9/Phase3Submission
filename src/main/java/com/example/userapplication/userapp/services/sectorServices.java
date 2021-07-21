package com.example.userapplication.userapp.services;

import java.util.List;

import com.example.userapplication.userapp.model.sector;
import com.example.userapplication.userapp.repository.sectorRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class sectorServices {

    @Autowired
    private sectorRepository sectorrepository;

    public void addSector(sector sector){
        sectorrepository.save(sector);
    }

    public sector showSector(String sectorName){
        return sectorrepository.findBySectorName(sectorName);
    }

    public void deleteSector(Long sectorId){

        sectorrepository.deleteById(sectorId);

    }

    public List<sector> getSector(){
        return sectorrepository.findAll();
    }

    
}
