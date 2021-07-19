package com.example.userapplication.userapp.repository;

import com.example.userapplication.userapp.model.sector;

import org.springframework.data.jpa.repository.JpaRepository;

public interface sectorRepository extends JpaRepository<sector,Long> {

    public sector findBySectorName(String sectorName);
    
}
