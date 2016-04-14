package nl.sogeti.webshop.rest;

import nl.sogeti.webshop.Application;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.test.IntegrationTest;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.boot.test.TestRestTemplate;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.web.client.RestTemplate;

import static org.hamcrest.Matchers.equalTo;
import static org.junit.Assert.assertThat;

@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@IntegrationTest({"server.port=18080"})
public class ProductControllerIT {

    private static final String BASE_URL = "http://localhost:";

    @Value("${local.server.port}")
    private int port;

    private String endpointUrl;

    private RestTemplate testRestTemplate;

    @Before
    public void setUp() throws Exception {
        endpointUrl = BASE_URL + port;
        testRestTemplate = new TestRestTemplate();
    }

    @Test
    public void getProducts() throws Exception {
        endpointUrl += "/products";
        ResponseEntity<String> response = testRestTemplate.getForEntity(endpointUrl, String.class);
        assertThat(response.getStatusCode(), equalTo(HttpStatus.OK));
        assertThat(response.getBody(), equalTo("[{\"id\":1,\"name\":\"Test\",\"description\":\"Test description\",\"price\":1.95}]"));
    }
}