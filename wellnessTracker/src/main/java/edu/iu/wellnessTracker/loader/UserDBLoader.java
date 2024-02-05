package edu.iu.wellnessTracker.loader;

import edu.iu.wellnessTracker.appuser.AppUser;
import edu.iu.wellnessTracker.appuser.AppUserRepository;
import edu.iu.wellnessTracker.appuser.AppUserRole;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.core.annotation.Order;
import org.springframework.stereotype.Component;

/**
 * Not used, loads database with dummy code
 */
@Component
@Order(1)
public class UserDBLoader implements CommandLineRunner {

    private final AppUserRepository appUserRepository;

    @Autowired
    public UserDBLoader(AppUserRepository users) {
        this.appUserRepository = users;
    }

    @Override
    public void run(String... strings) throws Exception {
//        initializeUsers();
    }

    private void initializeUsers() {
        AppUser user1 = new AppUser("Tim","tim@email.com", "password", AppUserRole.ADMIN);
        this.appUserRepository.save(user1);
    }
}
