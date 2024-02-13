package com.diversecomputing.demoproject.movie;

import com.diversecomputing.demoproject.dto.MovieDto;
import com.diversecomputing.demoproject.exception.NotFoundException;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class MovieService {

    private final MovieDao movieDao;

    public MovieService(MovieDao movieDao) {
        this.movieDao = movieDao;
    }

    public List<Movie> getMovies() {
        return movieDao.selectMovies();
    }

    public Movie addNewMovie(Movie movie) {
        // TODO: check if movie exists
        int resultId = movieDao.insertMovie(movie);

        return new Movie(
                resultId,
                movie.name(),
                null,
                movie.releaseDate()
        );
    }

    public void deleteMovie(Integer id) {
        Optional<Movie> movies = movieDao.selectMovieById(id);
        movies.ifPresentOrElse(movie -> {
            int result = movieDao.deleteMovie(id);
            if (result != 1) {
                throw new IllegalStateException("oops could not delete movie");
            }
        }, () -> {
            throw new NotFoundException(String.format("Movie with id %s not found", id));
        });
    }

    public Movie getMovie(int id) {
        return movieDao.selectMovieById(id)
                .orElseThrow(() -> new NotFoundException(String.format("Movie with id %s not found", id)));
    }

    public void editMovie(MovieDto movieDto) {
        int result = movieDao.editMovie(movieDto);
        if(result != 1){
            throw new IllegalStateException("oops something went wrong");
        }
    }

    public List<Movie> getMovieWord(String name){
        return movieDao.selectMovieByWord(name);
    }
}
