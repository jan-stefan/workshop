package de.workshop.workshop.Register.Services;

import de.workshop.workshop.Register.Session.Session;
import de.workshop.workshop.Register.Session.UserData;

public class CheckData {
    Session sess = new Session();
    public boolean usernameForgiven(String username){
        UserData ud;
        for(int i=1; i<=sess.allUsers.size(); i++){
            ud = (UserData) sess.allUsers.get(i);
            if(ud.username.equals(username))return true;
        }
        return false;
    }
}
