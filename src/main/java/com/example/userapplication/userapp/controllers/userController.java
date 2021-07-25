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
import org.springframework.web.servlet.ModelAndView;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
public class userController {

    @Autowired
    private userService userservice;
    //@CrossOrigin(origins = "http://localhost:3000")


    @RequestMapping(value = "/signup",method = RequestMethod.POST)
    public userEntity signup(@RequestBody userEntity user) throws AddressException, MessagingException{

        String ADMIN_USERNAME = "Admin";
        String ADMIN_PASSWORD = "admin";
        if(user.getUsername().equals(ADMIN_USERNAME) && user.getPassword().equals(ADMIN_PASSWORD)){
            user.setAdmin(true);
        }
        userservice.createNewUser(user);

        HttpHeaders headers = new HttpHeaders();
        headers.add("Responded", "userController");
        headers.add("Access-Control-Allow-Origin", "*");

        userservice.sendconfirmationmail(user.getId());
        return user;
    }


    @RequestMapping(value = "/confirmuser/{userId}",method = RequestMethod.GET)
    public ModelAndView welcomePage(@PathVariable Long userId ){

        userservice.confirmed(userId);
        String uri = "http://localhost:3000/user/"+userId;
        return new ModelAndView("redirect:"+uri);
	    
	    
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @RequestMapping(value = "/login/{username}/{password}", method = RequestMethod.GET)
    public userEntity login(@PathVariable("username") String username,
    @PathVariable("password") String password){
        userEntity registered = userservice.userLogin(username, password);
        return registered;
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

    /*@RequestMapping(value = "/viewipo",method = RequestMethod.GET)
    public String viewIpo(){

        String uri = "http://localhost:8080/ipocontroller/listipo/";
	    RestTemplate restTemplate = new RestTemplate();
	    String result = restTemplate.getForObject(uri, String.class);
	    return result;
        
    }*/

    @RequestMapping(value = "/viewprofile/{userId}",method = RequestMethod.GET)
    public userEntity viewProfile(@PathVariable Long userId){
        return userservice.viewUser(userId);
    }


    @RequestMapping(value = "/updateprofile/{userId}/{password}",method = RequestMethod.GET)
    public userEntity updateProfile(@PathVariable("userId") Long userId, @PathVariable("password") String password){
        userEntity usr = userservice.viewUser(userId);
        usr.setPassword(password);
        userservice.createNewUser(usr);
        return usr;  
    }

}
