package nl.sogeti.webshop.domain;

import com.fasterxml.jackson.annotation.JsonView;
import nl.sogeti.webshop.util.Views;
import org.hibernate.validator.constraints.Email;

import javax.persistence.Embeddable;

/**
 * Created by schepeje on 19-4-2016.
 */
@Embeddable
public class CustomerData {

    @JsonView(Views.User.class)
    private String firstName;

    @JsonView(Views.User.class)
    private String infix;

    @JsonView(Views.User.class)
    private String lastName;

    @JsonView(Views.User.class)
    @Email
    private String email;

    @JsonView(Views.User.class)
    private String street;

    @JsonView(Views.User.class)
    private String houseNumber;

    @JsonView(Views.User.class)
    private String postCode;

    @JsonView(Views.User.class)
    private String city;

    public String getFirstName() {
        return firstName;
    }

    public void setFirstName(String firstName) {
        this.firstName = firstName;
    }

    public String getInfix() {
        return infix;
    }

    public void setInfix(String infix) {
        this.infix = infix;
    }

    public String getLastName() {
        return lastName;
    }

    public void setLastName(String lastName) {
        this.lastName = lastName;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getStreet() {
        return street;
    }

    public void setStreet(String street) {
        this.street = street;
    }

    public String getHouseNumber() {
        return houseNumber;
    }

    public void setHouseNumber(String houseNumber) {
        this.houseNumber = houseNumber;
    }

    public String getPostCode() {
        return postCode;
    }

    public void setPostCode(String postCode) {
        this.postCode = postCode;
    }

    public String getCity() {
        return city;
    }

    public void setCity(String city) {
        this.city = city;
    }
}