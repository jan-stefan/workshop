package de.workshop.workshop.login.service;

import de.workshop.workshop.Register.Session.UserData;
import de.workshop.workshop.Sessions;

public class CheckData {
    public boolean passwordEquils(String user, String pass){
        Sessions sessions = new Sessions();
        UserData ud;
        for(int i=1; i<=sessions.allUsers.size(); i++){
            ud = (UserData) sessions.allUsers.get(i);
            if(ud.username.equalsIgnoreCase(user)){
                if(ud.password.equals(pass))return true;
                return false;
            }
        }
        return false;
    }
}
