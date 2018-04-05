package de.workshop.workshop.Register.Session;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import lombok.Setter;

import javax.persistence.Id;

@Setter
@Getter
@RequiredArgsConstructor
@NoArgsConstructor
public class UserData {
    @Id
    public long id;
    @NonNull
    public String username;
    @NonNull
    public String password;
    @NonNull
    public String firstname;
    @NonNull
    public String lastname;
}
