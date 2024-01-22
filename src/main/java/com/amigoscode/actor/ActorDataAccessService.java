package com.amigoscode.actor;

import com.amigoscode.dto.ActorDto;
import com.amigoscode.movie.Movie;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.util.List;


@Repository
public class ActorDataAccessService implements ActorDao{
    private final NamedParameterJdbcTemplate jdbcTemplate;


    public ActorDataAccessService(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }

    @Override
    public int addActor(ActorDto actorDto) {
        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("actorsName", actorDto.getName());
        //parameterSource.addValue("id", actorDto.getId());
        parameterSource.addValue("movie", actorDto.getMovie());

        final var sql = """
                    INSERT INTO actor(name, movie)
                    VALUES (:actorsName, :movie);
                """;
        return jdbcTemplate.update(sql, parameterSource);
    }

    @Override
    public List<Actor> selectActors() {
        var sql = """
                SELECT name, id, movie
                FROM actor
                """;
        return jdbcTemplate.query(sql, new ActorRowMapper());
    }
}
