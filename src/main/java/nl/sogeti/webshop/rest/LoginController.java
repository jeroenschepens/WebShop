package nl.sogeti.webshop.rest;

import nl.sogeti.webshop.domain.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
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
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth.getPrincipal().getClass() == User.class) {
            return auth.getPrincipal();
        } else {
            return null;
        }
    }
}