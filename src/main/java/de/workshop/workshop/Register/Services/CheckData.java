package de.workshop.workshop.Register.Services;

import de.workshop.workshop.Register.Session.UserData;
import de.workshop.workshop.Sessions;

public class CheckData {
    Sessions sess = new Sessions();
    public boolean usernameForgiven(String username){
        UserData ud;
        for(int i=1; i<=sess.allUsers.size(); i++){
            ud = (UserData) sess.allUsers.get(i);
            if(ud.username.equals(username))return true;
        }
        return false;
    }
}
