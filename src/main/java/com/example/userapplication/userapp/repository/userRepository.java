package com.example.userapplication.userapp.repository;

import com.example.userapplication.userapp.model.userEntity;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface userRepository extends JpaRepository<userEntity,Long> {
    
    public userEntity findByUsername(String username);
}
