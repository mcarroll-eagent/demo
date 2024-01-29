package com.diversecomputing.demoproject.movie;

import com.diversecomputing.demoproject.dto.MovieDto;
import org.springframework.jdbc.core.namedparam.MapSqlParameterSource;
import org.springframework.jdbc.core.namedparam.NamedParameterJdbcTemplate;
import org.springframework.stereotype.Repository;

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
            Select m.*, to_json(array_agg(row_to_json(a))) as actors
            From movie m
            Inner Join actor a on m.id = a.movie
            GROUP BY m.id
                """;
        final List<Movie> movies =
                jdbcTemplate.query(sql, new MovieRowMapper());


//        var actorData = """
//                        SELECT name, id, movie
//                        FROM actor
//                        WHERE movie = :movieId
//                        """;
//
//        for(final Movie movie : movies) {
//            final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
//            parameterSource.addValue("movieId", movie.id());
//
//            final List<Actor> newActors =
//                    jdbcTemplate.query(actorData, parameterSource, new ActorRowMapper());
//
//            final Movie newMovie = new Movie(
//                    movie.id(),
//                    movie.name(),
//                    newActors,
//                    movie.releaseDate()
//            );
//
//            movies.set(movies.indexOf(movie), newMovie);
//        }




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
            
            Select m.*, to_json(array_agg(row_to_json(a))) as actors
            From movie m
            Inner Join actor a on m.id = a.movie
            WHERE m.id = :id
            GROUP BY m.id
                """;

//         var sql = """
//                    Select m.*, to_json(array_agg(row_to_json(a))) as actors
//                    From movie m
//                    Inner Join actor a on m.id = a.movie
//                    GROUP BY m.id
//                """;
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


    @Override
    public List<Movie> selectMovieByWord(String name){
        final MapSqlParameterSource parameterSource = new MapSqlParameterSource();
        parameterSource.addValue("keyword", name);

        // FIRST ATTEMPT
//        final var sql = """
//             SELECT *
//             FROM movie
//             WHERE movie.name ILIKE '%' || :name || '%';
//
//            """;


        //SECOND ATTEMPT
        final var sql = """
        
        Select m.*, to_json(array_agg(row_to_json(a))) as actors
        FROM movie m
        INNER JOIN actor a ON m.id = a.movie
        WHERE m.name ILIKE CONCAT('%', :keyword, '%')
        GROUP BY m.id;
        
        """;
        return jdbcTemplate.query(sql, parameterSource, new MovieRowMapper());
    }

}
