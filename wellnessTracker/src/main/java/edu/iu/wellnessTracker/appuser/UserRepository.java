package edu.iu.wellnessTracker.appuser;


import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;


import java.util.Optional;

/**
 * User repository for database.
 */
@Repository
@Transactional(readOnly = true)
public interface UserRepository {
    Optional<User> findByEmail(String email);
}
