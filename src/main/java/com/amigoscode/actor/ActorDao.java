package com.amigoscode.actor;

import com.amigoscode.dto.ActorDto;

import java.util.List;

public interface ActorDao {
    int addActor(ActorDto actorDto);


    List<Actor> selectActors();
}
