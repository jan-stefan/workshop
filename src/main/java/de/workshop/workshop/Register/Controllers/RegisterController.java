package de.workshop.workshop.Register.Controllers;

import de.workshop.workshop.Register.Services.CheckData;
import de.workshop.workshop.Register.Session.UserData;
import de.workshop.workshop.Register.Sessions;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class RegisterController {
    @RequestMapping(method = RequestMethod.POST, value = "/api/register")
    public ResponseEntity<?> getJson(@RequestBody UserData incomingUserData){
        CheckData cd = new CheckData();
        Sessions session = new Sessions();
        //check if user already exists
        if(cd.usernameForgiven(incomingUserData.username))return new ResponseEntity(null, HttpStatus.FORBIDDEN);
        //add new user to hashmap
        session.allUsers.put(session.allUsers.size()+1,incomingUserData);
        return new ResponseEntity(null, HttpStatus.OK);
    }
}
