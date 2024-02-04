package edu.iu.wellnessTracker.appuser;

import lombok.AllArgsConstructor;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

/**
 * Queries for database.
 */
@Service
@AllArgsConstructor
public class AppUserService implements UserDetailsService {

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
}
