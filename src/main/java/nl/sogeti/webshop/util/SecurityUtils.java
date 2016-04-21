package nl.sogeti.webshop.util;

import nl.sogeti.webshop.domain.User;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

/**
 * Created by schepeje on 21-4-2016.
 */
public class SecurityUtils {

    public static User getCurrentUser() {
        Authentication auth = SecurityContextHolder.getContext().getAuthentication();
        if (auth.getPrincipal().getClass() == User.class) {
            return (User) auth.getPrincipal();
        } else {
            return null;
        }
    }
}