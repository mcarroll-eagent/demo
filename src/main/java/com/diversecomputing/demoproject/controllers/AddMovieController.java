package com.diversecomputing.demoproject.controllers;

import com.diversecomputing.demoproject.dto.MovieDto;
import com.diversecomputing.demoproject.movie.Movie;
import com.diversecomputing.demoproject.movie.MovieService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.time.LocalDate;
@CrossOrigin
@Controller
public class AddMovieController {
    final MovieService movieService;


    public AddMovieController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/addmovie")
    public String addMovieForm(Model model){
        return "addmovie";
    }

    @PostMapping("/addmovie")
    public String addMovieSubmit(@ModelAttribute Movie movie, Model model){
        movieService.addNewMovie(movie);
        return "addMovieResult";
    }
}
