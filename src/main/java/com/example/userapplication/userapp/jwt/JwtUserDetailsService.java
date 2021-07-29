package com.example.userapplication.userapp.jwt;

import java.util.ArrayList;
//add jwt.secret=abcd to application properties
import java.util.Collection;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
//import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.example.userapplication.userapp.model.userEntity;
import com.example.userapplication.userapp.repository.userRepository;
//import com.nonJWT.stockexchange.model.*;
@Service
public class JwtUserDetailsService implements UserDetailsService {
	
    @Autowired
	userRepository userrepo;


	//@Autowired
	//private PasswordEncoder bcryptEncoder;
	
	public Collection<? extends GrantedAuthority> getAuthorities() {
	       
		userEntity user = new userEntity();
     
     List<SimpleGrantedAuthority> authorities = new ArrayList<>();
      
     
         authorities.add(new SimpleGrantedAuthority(user.getRole()));
    
      
     return authorities;
 }
	@Override
	public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
		userEntity user = userrepo.findByUsername(username);
		
		if (user == null) {
			throw new UsernameNotFoundException("User not found with username: " + username);
		}
	//non dto code below	//return new org.springframework.security.core.userdetails.User(user.getname(), user.getpassword(),
			//	new ArrayList<>());
		return new UserDetails1(user);//you have to implement userdetails if you dont want to use dto
	}

//implement without dto	public com.stockexchange.phase3.User1 save(UserDto user) {
	/*public userEntity save(userEntity user) {
		userEntity newUser = new userEntity();
		//newUser.setname(user.getUsername());
		//newUser.setpassword(bcryptEncoder.encode(user.getPassword()));
	    System.out.println(user.getUsername()+"Checko");
		
		newUser.setUsername(user.getUsername());
	    newUser.setPassword(bcryptEncoder.encode(user.getPassword()));
	    newUser.setEmail(user.getEmail());
		newUser.setRole(user.getRole());
		return userrepo.save(newUser);
	}*/





}