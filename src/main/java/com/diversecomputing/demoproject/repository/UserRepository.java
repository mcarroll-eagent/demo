package com.diversecomputing.demoproject.repository;

import com.diversecomputing.demoproject.dao.UserDao;
import com.diversecomputing.demoproject.models.ApplicationUser;
import com.diversecomputing.demoproject.rowMappers.UserRowMapper;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.jdbc.support.GeneratedKeyHolder;
import org.springframework.jdbc.support.KeyHolder;
import org.springframework.stereotype.Repository;

import java.util.Objects;
import java.util.Optional;

@Repository
public class UserRepository implements UserDao {
    private final NamedParameterJdbcTemplate jdbcTemplate;

    public UserRepository(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public Optional<ApplicationUser> findByUsername(String username){
        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("username", username);

        var sql = """
            Select u.*
            From users u
            WHERE u.username = :username
                """;

        return jdbcTemplate.query(sql, parameterSource, new UserRowMapper())
                .stream().findFirst();
    }

    @Override
    public ApplicationUser save(ApplicationUser user) {

        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("user", user.getUsername());
        parameterSource.addValue("pass", user.getPassword());

        final var sql = """
                    INSERT INTO users (username, password)
                    VALUES (:user, :pass)
                """;
        final KeyHolder keyHolder = new GeneratedKeyHolder();
        jdbcTemplate.update(sql, parameterSource, keyHolder, new String[]{"user_id"});

        user.setUserId(Objects.requireNonNull(keyHolder.getKey()).intValue());
        return user;
    }
}
