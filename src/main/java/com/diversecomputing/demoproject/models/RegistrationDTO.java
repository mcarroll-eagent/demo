package com.diversecomputing.demoproject.models;

public class RegistrationDTO {
    private String username;
    private String password;

    public RegistrationDTO(){
        super();
    }

    public RegistrationDTO(String username, String password){
        this.username = username;
        this.password = password;
    }

    public String getUsername(){
        return this.username;
    }

    public String getPassword(){
        return this.password;
    }

    public void setUsername(String username){
        this.username = username;
    }

    public void setPassword(String password){
        this.password = password;
    }

    public String toString(){
        return "Username: " + this.username + " password: " + this.password;
    }
}
