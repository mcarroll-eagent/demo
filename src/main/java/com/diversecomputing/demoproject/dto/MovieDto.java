package com.diversecomputing.demoproject.dto;

import lombok.Data;

import java.time.LocalDate;

@Data
public class MovieDto {
    Integer id;
    String name;
    LocalDate releaseDate;
}
