package edu.iu.wellnessTracker.registration;


import edu.iu.wellnessTracker.appuser.AppUser;
import edu.iu.wellnessTracker.appuser.AppUserRole;
import edu.iu.wellnessTracker.appuser.AppUserService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;


/**
 * Registration service, creates a user when http request sent to localhost:8080/api/v1/registration
 * example JSON:
 * {
 *     "name": "Tim",
 *     "email": "tim@email.com",
 *     "password": "test"
 * }
 */
@Service
@AllArgsConstructor
public class RegistrationService {
    private final AppUserService appUserService;

    public String register(RegistrationRequest request) {
        String token = appUserService.signUpUser(
                new AppUser(
                        request.getName(),
                        request.getEmail(),
                        request.getPassword(),
                        AppUserRole.ADMIN
                )
        );
        return token;
    }
}
