package nl.sogeti.webshop.service;

import nl.sogeti.webshop.domain.User;
import nl.sogeti.webshop.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
public class UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private MailService mailService;

    public void registerUser(User user) {
        user.setAdmin(false);
        user.setId(null);
        user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        String email = user.getUsername();
        if (userRepository.findOneByCustomerDataEmail(email).orElse(null) == null) {
            userRepository.save(user);
            mailService.sendMail(user);
        } else {
            throw new RuntimeException("EMAIL_USED");
        }
    }

    public void updateUser(User user) {
        if (user.getPassword() == null || user.getPassword().length() == 0) {
            User oldUser = userRepository.findOne(user.getId());
            user.setPassword(oldUser.getPassword());
        } else {
            user.setPassword(new BCryptPasswordEncoder().encode(user.getPassword()));
        }
        userRepository.save(user);
    }
}