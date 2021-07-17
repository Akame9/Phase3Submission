package com.example.userapplication.userapp.controllers;

import javax.mail.MessagingException;
import javax.mail.internet.AddressException;

import com.example.userapplication.userapp.model.companyEntity;
import com.example.userapplication.userapp.model.userEntity;
import com.example.userapplication.userapp.services.companyServices;
import com.example.userapplication.userapp.services.userService;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class userController {

    @Autowired
    private userService userservice;
    @Autowired
    private companyServices companyservices;
    @CrossOrigin(origins = "http://localhost:3000")


    @RequestMapping(value = "/signup",method = RequestMethod.POST)
    public String signup(@RequestBody userEntity user) throws AddressException, MessagingException{

        userservice.createNewUser(user);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Responded", "userController");
        headers.add("Access-Control-Allow-Origin", "*");

        userservice.sendconfirmationmail(user.getId());
        return user.toString();
    }


    @RequestMapping(value = "/confirmuser/{userId}",method = RequestMethod.GET)
    public String welcomePage(@PathVariable Long userId ){

        return "Welcome" + userservice.confirmed(userId);
    }

    @RequestMapping(value = "/login", method = RequestMethod.POST)
    public String login(@RequestBody userEntity user){
        boolean registered = userservice.userLogin(user.getUsername(), user.getPassword());
        if(registered){
            return "Welcome";
        }
        else{
            return "User Not Registered Yet Please Register";
        }
    }

    /*
    @RequestMapping(value = "/login", method = RequestMethod.GET)
    public String logout(){
        return "Logged Out";
    }
    */

    @RequestMapping(value = "/searchbycompany/{companyName}",method = RequestMethod.GET)
    @ResponseBody
    public String searchByCompany(@PathVariable String companyName){

        String uri = "http://localhost:8080/companydetails/"+companyName;
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    return result;
        
    }

    @RequestMapping(value = "/viewipo",method = RequestMethod.GET)
    public String viewIpo(){

        String uri = "http://localhost:8080/ipodetails/";
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    return result;
        
    }
    
    

}
