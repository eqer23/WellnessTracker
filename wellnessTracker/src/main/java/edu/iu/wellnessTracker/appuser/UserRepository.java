package edu.iu.wellnessTracker.appuser;


import org.springframework.context.annotation.Bean;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;

/**
 * User repository for database.
 */

@Repository
@Transactional(readOnly = true)
public interface UserRepository
        extends JpaRepository<User, Long> {

    Optional<User> findByEmail(String email);

//    @Transactional
//    @Modifying
//    @Query("UPDATE AppUser a " +
//            "SET a.enabled = TRUE WHERE a.email = ?1")
//    int enableAppUser(String email);

}
