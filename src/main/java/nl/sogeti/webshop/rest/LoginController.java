package nl.sogeti.webshop.rest;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by schepeje on 21-4-2016.
 */
@RestController
public class LoginController {


    //@PreAuthorize("hasRole('USER')")
    @RequestMapping(value = "/login")
    public String login() {
        return "{}";
    }
}