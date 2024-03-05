package com.diversecomputing.demoproject.controllers;


import com.diversecomputing.demoproject.models.ApplicationUser;
import com.diversecomputing.demoproject.models.LoginResponseDTO;
import com.diversecomputing.demoproject.models.RegistrationDTO;
import com.diversecomputing.demoproject.services.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import javax.naming.AuthenticationException;

@RestController
@RequestMapping("/auth")
@CrossOrigin()
public class AuthenticationController {

    @Autowired
    private AuthenticationService authenticationService;

    @PostMapping("/register")
    public ApplicationUser registerUser(@RequestBody RegistrationDTO body){
        return authenticationService.registerUser(body.getUsername(), body.getPassword());
    }

    @PostMapping("/login")
    public LoginResponseDTO loginUser(@RequestBody RegistrationDTO body) throws AuthenticationException {
        return authenticationService.loginUser(body.getUsername(), body.getPassword());
    }

}
