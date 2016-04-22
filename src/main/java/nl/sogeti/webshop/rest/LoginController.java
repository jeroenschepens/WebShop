package nl.sogeti.webshop.rest;

import nl.sogeti.webshop.domain.User;
import nl.sogeti.webshop.util.SecurityUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by schepeje on 21-4-2016.
 */
@RestController
public class LoginController {

    //@PreAuthorize("hasRole('USER')")
    @RequestMapping(value = "/login")
    public Object login() {
        User user = SecurityUtils.getCurrentUser();
        if (user != null) {
            if (user.isAdmin()) {
                return user;
            } else {
                return user.getCustomerData();
            }
        } else {
            return null;
        }
    }
}