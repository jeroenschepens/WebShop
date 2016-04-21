package nl.sogeti.webshop.service;

import nl.sogeti.webshop.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

/**
 * Created by schepeje on 21-4-2016.
 */
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findOneByCustomerDataEmail(String email);
}