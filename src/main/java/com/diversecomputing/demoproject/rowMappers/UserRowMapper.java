package com.diversecomputing.demoproject.rowMappers;

import com.diversecomputing.demoproject.actor.Actor;
import com.diversecomputing.demoproject.models.ApplicationUser;
import com.diversecomputing.demoproject.models.Role;
import com.google.gson.Gson;
import org.springframework.jdbc.core.RowMapper;
import org.springframework.security.core.userdetails.User;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

public class UserRowMapper implements RowMapper<ApplicationUser> {



    @Override
    public ApplicationUser mapRow(ResultSet resultSet, int i) throws SQLException {
//        Gson gson = new Gson();
//        final String rolesJson = resultSet.getString("roles");
//        final Role[] authorities = gson.fromJson(rolesJson, Role[].class);


        Integer userId = resultSet.getInt("user_id");
        String username = resultSet.getString("username");
        String password = resultSet.getString("password");
        Set<Role> roles = new HashSet<>();

        return new ApplicationUser(userId, username, password, roles);
    }
}

