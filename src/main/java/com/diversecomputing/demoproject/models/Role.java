package com.diversecomputing.demoproject.models;


import lombok.Getter;
import org.springframework.security.core.GrantedAuthority;

public class Role implements GrantedAuthority {
    private String authority;

    @Getter
    private Integer roleId;

    public Role(){
        super();
    }

    public Role(String authority){
        this.authority = authority;
    }

    public Role(Integer roleId, String authority){
        this.authority = authority;
        this.roleId = roleId;
    }

    @Override
    public String getAuthority() {
        return this.authority;
    }

    public void setAuthority(String authority){
        this.authority = authority;
    }

    public void setRoleId(Integer roleId){
        this.roleId = roleId;
    }
}
