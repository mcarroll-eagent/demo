package com.diversecomputing.demoproject.dao;

import com.diversecomputing.demoproject.models.Role;

import java.util.Optional;

public interface RoleDao {

    Optional<Role> findByAuthority(String role);
    Role save(Role role);
}
