package nl.sogeti.webshop.service;

import nl.sogeti.webshop.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    public void registerUser(User user) {
        user.setAdmin(false);
        user.setId(null);
        String email = user.getUsername();
        if (userRepository.findOneByCustomerDataEmail(email).orElse(null) == null) {
            userRepository.save(user);
        } else {
            throw new RuntimeException("EMAIL_USED");
        }
    }
}