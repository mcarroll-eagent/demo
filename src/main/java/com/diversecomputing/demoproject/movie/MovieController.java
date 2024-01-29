package com.diversecomputing.demoproject.movie;

import com.diversecomputing.demoproject.dto.MovieDto;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/movies")
public class MovieController {

    private final MovieService movieService;

    public MovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping
    public List<Movie> listMovies() {
        return movieService.getMovies();
    }

    @GetMapping("{id}")
    public Movie getMovieId(@PathVariable("id") Integer id) {
        return movieService.getMovie(id);
    }

    @PostMapping
    public void addMovie(@RequestBody Movie movie) {
        movieService.addNewMovie(movie);
    }

    @DeleteMapping("{id}")
    public void deleteMovie(@PathVariable("id") Integer id) {
        movieService.deleteMovie(id);
    }

    @PostMapping("edit")
    public void editMovie(@RequestBody MovieDto movieDto) { movieService.editMovie(movieDto); }

    @GetMapping("results")
    public List<Movie> getMovieWord(@RequestParam(name = "name") String name){
        return movieService.getMovieWord(name);
    }
   // TODO: Update movie
}
