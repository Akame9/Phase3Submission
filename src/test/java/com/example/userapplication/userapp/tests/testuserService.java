package com.example.userapplication.userapp.tests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.assertEquals;
import static org.junit.jupiter.api.Assertions.assertFalse;
import static org.junit.jupiter.api.Assertions.assertNotEquals;
import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import com.example.userapplication.userapp.controllers.userController;
import com.example.userapplication.userapp.model.userEntity;
import com.example.userapplication.userapp.repository.userRepository;
import com.example.userapplication.userapp.services.userService;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

@SpringBootTest
public class testuserService {

    @Autowired
    private userService userservice;

    @Autowired
    private userRepository userrepository;

    @Autowired
    private userController usercontroller;


    @Test
    public void testCreateNewUser(){

        userEntity user = new userEntity();
        user.setId(1);
        user.setUsername("Akame");
        user.setPassword("pass");
        user.setEmail("akame@gmail.com");
        user.setAdmin(false);
        user.setConfirmed(false);
        
        userservice.createNewUser(user);
        assertNotNull(userrepository.findById(user.getId()).get());
        
    }
    
    @Test
    public void testConfirmed(){

        userEntity user = new userEntity();
        user.setId(1);
        user.setUsername("Akame");
        user.setPassword("pass");
        user.setEmail("akame@gmail.com");
        user.setAdmin(false);
        user.setConfirmed(false);
        
        userrepository.save(user);
        userservice.confirmed(user.getId());
        userEntity exitinguser = userrepository.findById(user.getId()).get();
        
        assertTrue(exitinguser.isConfirmed());
        //assertThat(true).isEqualTo(true);
    }
    
    @Test
    public void testuserLogin(){

        userEntity user = new userEntity();
        user.setId(1);
        user.setUsername("Akame");
        user.setPassword("pass");
        user.setEmail("akame@gmail.com");
        user.setAdmin(false);
        user.setConfirmed(true);
        
        userrepository.save(user);
        
        userEntity result = userservice.userLogin(user.getUsername() , user.getPassword());
    
        assertNotNull(result);
    }


    @Test
    public void testviewprofile(){
        userEntity user = new userEntity();
        user.setId(1);
        user.setUsername("Akame");
        user.setPassword("pass");
        user.setEmail("akame@gmail.com");
        user.setAdmin(false);
        user.setConfirmed(false);
        
        userrepository.save(user);

        userEntity result = usercontroller.viewProfile(user.getId());

        assertThat(result.getId()).isEqualTo(user.getId());
                

    }

    @Test
    public void testupdateprofile(){
        userEntity user = new userEntity();
        user.setId(1);
        user.setUsername("Akame");
        user.setPassword("pass");
        user.setEmail("akame@gmail.com");
        user.setAdmin(false);
        user.setConfirmed(false);
        
        userrepository.save(user);

        userEntity result = usercontroller.updateProfile(user.getId(), "password");
        assertThat(result.getPassword()).isEqualTo("password");

         
    }

}
