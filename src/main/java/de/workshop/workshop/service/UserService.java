package de.workshop.workshop.service;

import de.workshop.workshop.Register.Session.UserData;
import de.workshop.workshop.repository.UserRepository;
//import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;

//@Slf4j
public class UserService {

    private final UserRepository userRepository;

    @Autowired
    public UserService(final UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public UserData saveUser(UserData userData){
        return userRepository.save(userData);
    }

    public boolean deleteUser(UserData userData){
        try{
            userRepository.delete(userData);
            return true;
        }catch(IllegalArgumentException e){
            //log.warn("No User found for deletion",e);
            return false;
        }
    }
}
