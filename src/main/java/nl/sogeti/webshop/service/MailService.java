package nl.sogeti.webshop.service;

import nl.sogeti.webshop.domain.User;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.scheduling.annotation.Async;
import org.springframework.stereotype.Service;

/**
 * Created by schepeje on 25-4-2016.
 */
@Service
public class MailService {

    @SuppressWarnings("SpringJavaAutowiringInspection")
    @Autowired
    private JavaMailSender mailSender;

    @Async
    public void sendMail(User user) {
        SimpleMailMessage message = new SimpleMailMessage();
        message.setFrom("Petsupplies Online <webshop.sogeti@gmail.com>");
        message.setTo(user.getCustomerData().getEmail());
        message.setSubject("Welkom " + user.getCustomerData().getFirstName());
        message.setText("Welkom bij PetSupplies!");
        mailSender.send(message);
    }
}