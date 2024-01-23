package com.diversecomputing.demoproject.controllers;

import com.diversecomputing.demoproject.movie.Movie;
import com.diversecomputing.demoproject.movie.MovieDao;
import com.diversecomputing.demoproject.movie.MovieService;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PostMapping;

import java.util.List;

@Controller
public class SearchController {
    final MovieService movieService;

    public SearchController(MovieService movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/search")
    public String searchPage(Model model){
        model.addAttribute("movie", movieService.getMovies());
        return "search";
    }
    @PostMapping("/search")
    public String searchResult(@ModelAttribute("movieSearchFormData") Movie formData, Model model){
        Movie mov = movieService.getMovie(formData.id());
        model.addAttribute("movie", mov);

        return "result";

    }
}
