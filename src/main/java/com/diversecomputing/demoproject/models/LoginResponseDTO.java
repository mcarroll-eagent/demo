package com.diversecomputing.demoproject.models;

import lombok.Getter;
import lombok.Setter;

public class LoginResponseDTO {

    @Getter
    @Setter
    private ApplicationUser user;

    @Getter
    @Setter
    private String jwt;

    public LoginResponseDTO(){
        super();
    }

    public LoginResponseDTO(ApplicationUser user, String jwt){
        this.user = user;
        this.jwt = jwt;
    }


}
