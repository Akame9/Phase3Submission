package com.example.userapplication.userapp.repository;

import com.example.userapplication.userapp.model.userEntity;

import org.springframework.data.jpa.repository.JpaRepository;

public interface userRepository extends JpaRepository<userEntity,Long> {
    
}
