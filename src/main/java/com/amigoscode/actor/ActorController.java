package com.amigoscode.actor;


import com.amigoscode.dto.ActorDto;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping(path = "api/v1/movies/")
public class ActorController {
    private final ActorService actorService;

    public ActorController(ActorService actorService) {
        this.actorService = actorService;
    }

    @PostMapping("actors")
    public void addActor(@RequestBody ActorDto actorDto){
        actorService.addActor(actorDto);

    }

    @GetMapping("actors")
    public List<Actor> listActors() { return actorService.getActors(); }
}
