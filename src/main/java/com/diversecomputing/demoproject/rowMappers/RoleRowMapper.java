package com.diversecomputing.demoproject.rowMappers;

import com.diversecomputing.demoproject.models.Role;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;

public class RoleRowMapper implements RowMapper<Role> {

    @Override
    public Role mapRow(ResultSet resultSet, int i) throws SQLException {
        Integer roleId = resultSet.getInt("role_id");
        String authority = resultSet.getString("authority");
        return new Role(roleId, authority);
    }



}
