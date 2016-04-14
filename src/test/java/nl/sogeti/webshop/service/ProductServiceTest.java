package nl.sogeti.webshop.service;

import nl.sogeti.webshop.Application;
import nl.sogeti.webshop.domain.Product;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.SpringApplicationConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.transaction.annotation.Transactional;

import java.util.Collection;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotNull;

/**
 * Created by cuong on 13-4-16.
 */
@RunWith(SpringJUnit4ClassRunner.class)
@SpringApplicationConfiguration(classes = Application.class)
@WebAppConfiguration
@Transactional
public class ProductServiceTest {

    @Autowired
    private ProductService productService;

    @Test
    public void findAll() throws Exception {
        Collection<Product> list = productService.findAll();

        assertNotNull("failure - expected not null", list);
        assertEquals("failure - expected list size", 1, list.size());
    }
}