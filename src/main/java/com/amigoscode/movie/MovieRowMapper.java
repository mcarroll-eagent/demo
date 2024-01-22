package com.amigoscode.movie;

import com.amigoscode.actor.Actor;
import com.amigoscode.actor.ActorRowMapper;
import com.amigoscode.dto.ActorDto;
import com.google.gson.Gson;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

public class MovieRowMapper implements RowMapper<Movie> {

    @Override
    public Movie mapRow(ResultSet resultSet, int i) throws SQLException {
        Gson gson = new Gson();
        final String actorJson = resultSet.getString("actors");
        final Actor[] actorArray = gson.fromJson(actorJson, Actor[].class);

        return new Movie(resultSet.getInt("id"),
                resultSet.getString("name"),
                List.of(actorArray),
                LocalDate.parse(resultSet.getString("release_date"))
        );
    }
}
