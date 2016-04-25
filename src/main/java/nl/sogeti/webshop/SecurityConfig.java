package nl.sogeti.webshop;

import nl.sogeti.webshop.service.AuthenticationService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.security.SecurityProperties;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.core.annotation.Order;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.Authentication;
import org.springframework.security.web.authentication.logout.SimpleUrlLogoutSuccessHandler;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 *
 */
@Configuration
@EnableGlobalMethodSecurity(prePostEnabled = true)
@Order(SecurityProperties.ACCESS_OVERRIDE_ORDER)
public class SecurityConfig extends WebSecurityConfigurerAdapter {

    @Autowired
    private AuthenticationService authenticationService;

    @Override
    protected void configure(AuthenticationManagerBuilder auth) throws Exception {
        auth.userDetailsService(authenticationService);
    }

    @Override
    protected void configure(HttpSecurity http) throws Exception {
        http.httpBasic().authenticationEntryPoint((request, response, authException) -> {
            String requestedBy = request.getHeader("X-Requested-With");
            if (requestedBy == null || requestedBy.isEmpty()) {
                response.addHeader("WWW-Authenticate", "Basic realm=Cascade Realm");
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
            } else {
                response.addHeader("WWW-Authenticate", "Application driven");
                response.sendError(HttpServletResponse.SC_UNAUTHORIZED, authException.getMessage());
            }
        });
        http.csrf().disable();
        http.logout().logoutUrl("/logout").logoutSuccessHandler(new SimpleUrlLogoutSuccessHandler() {
            @Override
            public void onLogoutSuccess(HttpServletRequest request, HttpServletResponse response, Authentication authentication) throws IOException, ServletException {
                response.setStatus(HttpServletResponse.SC_NO_CONTENT);
            }
        });
    }
}