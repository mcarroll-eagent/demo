package com.diversecomputing.demoproject.movie;

import com.diversecomputing.demoproject.dto.MovieDto;

import java.util.List;
import java.util.Optional;

public interface MovieDao {
    List<Movie> selectMovies();
    int insertMovie(Movie movie);
    int deleteMovie(int id);
    Optional<Movie> selectMovieById(int id);
    int editMovie(MovieDto movieDto);

    List<Movie> selectMovieByWord(String name);
    // TODO: Update
}
