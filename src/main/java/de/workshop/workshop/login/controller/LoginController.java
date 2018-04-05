package de.workshop.workshop.login.controller;

import de.workshop.workshop.login.Login;
import de.workshop.workshop.login.service.CheckData;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class LoginController {
    @RequestMapping(value = "/api/login", method = RequestMethod.POST)
    public ResponseEntity<?> getJson(@RequestBody Login data){
        CheckData cd = new CheckData();
        if(!cd.passwordEquils(data.name,data.password))new ResponseEntity(null, HttpStatus.FORBIDDEN);
        return new ResponseEntity(null, HttpStatus.OK);
    }
}
