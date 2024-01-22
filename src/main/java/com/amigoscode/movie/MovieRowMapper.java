package com.amigoscode.movie;

import com.amigoscode.actor.Actor;
import com.amigoscode.actor.ActorRowMapper;
import com.amigoscode.dto.ActorDto;
import org.springframework.jdbc.core.RowMapper;

import java.sql.ResultSet;
import java.sql.SQLException;
import java.time.LocalDate;
import java.util.List;

public class MovieRowMapper implements RowMapper<Movie> {

    @Override
    public Movie mapRow(ResultSet resultSet, int i) throws SQLException {
        return new Movie(resultSet.getInt("id"),
                resultSet.getString("name"),
                List.of(),
                LocalDate.parse(resultSet.getString("release_date"))
        );
    }
}
