package com.diversecomputing.demoproject.actor;

import com.diversecomputing.demoproject.dto.ActorDto;

import java.util.List;

public interface ActorDao {
    int addActor(ActorDto actorDto);


    List<Actor> selectActors();
}
