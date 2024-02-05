package edu.iu.wellnessTracker.appuser;

import ch.qos.logback.classic.encoder.JsonEncoder;
import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import java.time.LocalDateTime;
import java.util.UUID;

/**
 * user operations, signup, load
 * signUp user will return some generated code for the login idk
 */
@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

    private final BCryptPasswordEncoder bCryptPasswordEncoder;

    private final AppUserRepository appUserRepository;
    @Override
    public UserDetails loadUserByUsername(String email) throws UsernameNotFoundException {
        if (appUserRepository.findByEmail(email) == null) {
            throw new UsernameNotFoundException("No user found with email: " + email);
        }
        else {
            return appUserRepository.findByEmail(email);
        }
    }

    public String signUpUser(AppUser appUser) {
        boolean userExists = appUserRepository
                .findByEmail(appUser.getEmail()) != null;

        if (userExists) {
           // todo needs checks for existing user
            throw new IllegalStateException("email already taken");
        }

        String encodedPassword = bCryptPasswordEncoder
                .encode(appUser.getPassword());

        appUser.setPassword(encodedPassword);

        appUserRepository.save(appUser);

        return UUID.randomUUID().toString();
    }
}
