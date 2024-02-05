package edu.iu.wellnessTracker.registration;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.ToString;

/**
 * Stuff you need in JSON request to registration
 */
@Getter
@AllArgsConstructor
@EqualsAndHashCode
@ToString
public class RegistrationRequest {
    private final String name;
    private final String email;
    private final String password;

}
