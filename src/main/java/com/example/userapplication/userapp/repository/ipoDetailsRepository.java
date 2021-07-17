package com.example.userapplication.userapp.repository;

import com.example.userapplication.userapp.model.ipoDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ipoDetailsRepository extends JpaRepository<ipoDetails,Long> {
    
}
