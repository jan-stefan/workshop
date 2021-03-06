package de.workshop.workshop.Register.Session;

import lombok.*;

import javax.persistence.Id;

@Setter
@Getter
@RequiredArgsConstructor
@NoArgsConstructor
public class UserData {
    @Id
    @NonNull public String username;
    @NonNull public String password;
    @NonNull public String firstname;
    @NonNull public String lastname;
}
