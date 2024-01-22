package com.amigoscode.movie;

import com.amigoscode.actor.Actor;
import com.amigoscode.actor.ActorRowMapper;
import com.amigoscode.dto.MovieDto;
import org.springframework.jdbc.core.JdbcTemplate;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;
import java.util.Optional;

@Repository
public class MovieDataAccessService implements MovieDao {

    private final NamedParameterJdbcTemplate jdbcTemplate;

    public MovieDataAccessService(NamedParameterJdbcTemplate jdbcTemplate) {
        this.jdbcTemplate = jdbcTemplate;
    }


    @Override
    public List<Movie> selectMovies() {
        final
        var sql = """
                SELECT id, name, release_date
                FROM movie
                """;
        final List<Movie> movies =
                jdbcTemplate.query(sql, new MovieRowMapper());


        var actorData = """
                        SELECT name, id, movie
                        FROM actor
                        WHERE movie = :movieId
                        """;

        for(final Movie movie : movies) {
            final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
            parameterSource.addValue("movieId", movie.id());

            final List<Actor> newActors =
                    jdbcTemplate.query(actorData, parameterSource, new ActorRowMapper());

            final Movie newMovie = new Movie(
                    movie.id(),
                    movie.name(),
                    newActors,
                    movie.releaseDate()
            );

            movies.set(movies.indexOf(movie), newMovie);
        }


        var actorsForMovie = """
                    SELECT actor.movie, actor.name
                    FROM actor
                    INNER JOIN movie
                    ON actor.movie = movie.id
                    WHERE actor.movie = movie.id
                """;




        return movies;
    }

    @Override
    public int insertMovie(Movie movie) {
        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("name", movie.name());
        parameterSource.addValue("releaseDate", movie.releaseDate());
        var sql = """
                INSERT INTO movie(name, release_date)
                VALUES (:name, :releaseDate);
                """;
        return jdbcTemplate.update(
                sql,
                parameterSource
        );
    }

    @Override
    public int deleteMovie(int id) {
        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("id", id);
        final var sql = """
                DELETE FROM movie
                WHERE id = :id
            """;
        return jdbcTemplate.update(sql, parameterSource);

    }

    @Override
    public Optional<Movie> selectMovieById(int id) {
        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("id", id);

        final var sql = """
                SELECT id, name, release_date
                FROM movie
                WHERE id = :id;
                """;
        return jdbcTemplate.query(sql, parameterSource, new MovieRowMapper())
                .stream()
                .findFirst();
    }

    @Override
    public int editMovie(MovieDto movieDto) {
        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("name", movieDto.getName());
        parameterSource.addValue("releaseDate", movieDto.getReleaseDate());
        parameterSource.addValue("id", movieDto.getId());

        var sql = """
                Update movie
                Set name = :name, release_date = :releaseDate
                Where id = :id
            """;

        return jdbcTemplate.update(sql, parameterSource);
    }

}
