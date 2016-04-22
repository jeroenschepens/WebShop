package nl.sogeti.webshop.rest;

import nl.sogeti.webshop.domain.User;
import nl.sogeti.webshop.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

/**
 * Created by schepeje on 22-4-2016.
 */
@RequestMapping("api/users")
@RestController
public class UserController {

    @Autowired
    private UserService userService;

    @RequestMapping(value = "/register", method = RequestMethod.POST)
    public void registerUser(@RequestBody User user) {
        userService.registerUser(user);
    }
}