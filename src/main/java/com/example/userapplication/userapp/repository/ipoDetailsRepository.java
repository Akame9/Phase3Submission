package com.example.userapplication.userapp.repository;

import java.sql.Date;
import java.util.List;

import com.example.userapplication.userapp.model.ipoDetails;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface ipoDetailsRepository extends JpaRepository<ipoDetails,Long> {

    @Query(value = "SELECT * FROM ipo_Details WHERE date BETWEEN ?1 AND ?2",nativeQuery = true)
    public List<ipoDetails> findIpoFromAndTo(Date from, Date to);
    
}
