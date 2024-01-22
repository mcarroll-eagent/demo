package com.diversecomputing.demoproject.movie;

import com.diversecomputing.demoproject.actor.Actor;

import java.time.LocalDate;
import java.util.List;

public record Movie(Integer id,
                    String name,
                    List<Actor> actors,
                    LocalDate releaseDate) {
}
