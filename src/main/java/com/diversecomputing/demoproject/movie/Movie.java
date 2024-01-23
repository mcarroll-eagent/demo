package com.diversecomputing.demoproject.movie;

import com.diversecomputing.demoproject.actor.Actor;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;
import java.util.List;

public record Movie(Integer id,
                    String name,
                    List<Actor> actors,
                    @DateTimeFormat(pattern = "yyyy-MM-dd")
                    LocalDate releaseDate) {
}
