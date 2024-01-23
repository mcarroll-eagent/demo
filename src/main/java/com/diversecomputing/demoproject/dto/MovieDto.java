package com.diversecomputing.demoproject.dto;

import lombok.Data;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDate;

@Data
public class MovieDto {
    Integer id;
    String name;
    @DateTimeFormat(pattern = "yyyy-MM-dd")
    LocalDate releaseDate;
}
