package com.example.userapplication.userapp.services;

import java.util.Properties;

import javax.mail.Message;
import javax.mail.MessagingException;
import javax.mail.Session;
import javax.mail.Transport;
import javax.mail.internet.AddressException;
import javax.mail.internet.InternetAddress;
import javax.mail.internet.MimeMessage;

import com.example.userapplication.userapp.model.userEntity;
import com.example.userapplication.userapp.repository.userRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class userService {

    @Autowired
    private userRepository userrepository;

    public void createNewUser(userEntity user){
        userrepository.save(user);

    }

    //To send a confirmation mail to the user
    public void sendconfirmationmail(Long userId) throws AddressException,MessagingException {

        userEntity user = userrepository.getById(userId);

        final String USERNAME = "aathirapillai31469@gmail.com";
        final String PASSWORD = "athu@2021";
        
        Properties prop = new Properties();
        prop.put("mail.smtp.host", "smtp.gmail.com");
        prop.put("mail.smtp.port", "465");
        prop.put("mail.smtp.auth", "true");
        prop.put("mail.smtp.starttls.enable", "true");
        prop.put("mail.smtp.starttls.required", "true");
        prop.put("mail.smtp.ssl.protocols", "TLSv1.2");
        prop.put("mail.smtp.socketFactory.class", "javax.net.ssl.SSLSocketFactory");
        Session session = Session.getInstance(prop,
            new javax.mail.Authenticator(){
                protected javax.mail.PasswordAuthentication getPasswordAuthentication(){
                    return new javax.mail.PasswordAuthentication(USERNAME,PASSWORD);
                }
            });

        try{

            Message msg = new MimeMessage(session);
            msg.setFrom(new InternetAddress(USERNAME));
            msg.setRecipients(Message.RecipientType.TO, InternetAddress.parse(user.getEmail()));
            msg.setSubject("Confirmation Mail");
            msg.setContent(
                "<h1><a href=\"http://127.0.0.1:8080/confirmuser/"+userId+"/\">Click to Confirm </a></h1>",
                "text/html"
            );
            Transport.send(msg);
        }
        catch(MessagingException e){
            e.printStackTrace();
        }

    }

    public void confirmed(Long userId){
        userEntity user = userrepository.getById(userId);
        user.setConfirmed(true);
        userrepository.save(user);
    }

    public userEntity userLogin(String username, String password) throws NullPointerException{
        userEntity user = userrepository.findByUsername(username);
        
        if(user.isConfirmed()==true)
        {
            return user;    
        }
        else{
            return null;
        }
        
    }

    public userEntity viewUser(Long userId){
        userEntity user = userrepository.findById(userId).get(); 
        return user;
    }
    
}
