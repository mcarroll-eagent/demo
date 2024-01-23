package com.diversecomputing.demoproject.controllers;

import com.diversecomputing.demoproject.movie.Movie;
import com.diversecomputing.demoproject.movie.MovieService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;

import java.util.List;

@Controller
public class AllMoviesController {
    final MovieService movieService;

    public AllMoviesController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/AllMovies")
    public String AllMovies(Model model){
        final List<Movie> movies = movieService.getMovies();

        model.addAttribute("movies", movies);

        return "AllMovies";
    }
}
