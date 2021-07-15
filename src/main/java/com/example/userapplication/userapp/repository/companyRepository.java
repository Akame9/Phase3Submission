package com.example.userapplication.userapp.repository;

import com.example.userapplication.userapp.model.companyEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface companyRepository extends JpaRepository<companyEntity,Long> {
    
}
