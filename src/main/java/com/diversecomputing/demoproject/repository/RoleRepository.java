package com.diversecomputing.demoproject.repository;

import com.diversecomputing.demoproject.dao.RoleDao;
import com.diversecomputing.demoproject.models.Role;
import com.diversecomputing.demoproject.rowMappers.RoleRowMapper;
import com.diversecomputing.demoproject.rowMappers.UserRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public class RoleRepository implements RoleDao {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public RoleRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public Optional<Role> findByAuthority(String authority) {
        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("authority", authority);

        var sql = """
                    SELECT* FROM roles
                    WHERE authority = :authority
                """;

        return jdbcTemplate.query(sql, parameterSource, new RoleRowMapper())
                .stream().findFirst();
    }



    @Override
    public Role save(Role role) {
        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("authority", role.getAuthority());

        var sql = """
                    INSERT INTO roles (authority)
                    VALUES (:authority)
                    
                """;
        jdbcTemplate.update(sql, parameterSource);
        return role;
    }
}
