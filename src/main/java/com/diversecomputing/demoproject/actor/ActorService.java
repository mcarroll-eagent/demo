package com.diversecomputing.demoproject.actor;

import com.diversecomputing.demoproject.dto.ActorDto;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class ActorService {

    private final ActorDao actorDao;

    public ActorService(ActorDao actorDao) {
        this.actorDao = actorDao;
    }

    public void addActor(ActorDto actorDto) {
        int result = actorDao.addActor(actorDto);
        if(result != 1){
            throw new IllegalStateException("oops something went wrong");
        }
    }

    public List<Actor> getActors(){ return actorDao.selectActors(); }
}
