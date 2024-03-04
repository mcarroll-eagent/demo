package com.diversecomputing.demoproject.dao;

import com.diversecomputing.demoproject.models.ApplicationUser;

import java.util.Optional;

public interface UserDao {
    Optional<ApplicationUser> findByUsername(String username);

    ApplicationUser save(ApplicationUser user);


}
