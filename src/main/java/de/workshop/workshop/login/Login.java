package de.workshop.workshop.login;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.Id;

@Getter
@Setter
public class Login {
    @Id
    public String name;
    public String password;
}
