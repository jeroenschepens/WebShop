package nl.sogeti.webshop.rest;

import nl.sogeti.webshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by schepeje on 11-4-2016.
 */
@RestController
public class ProductController {

    @Autowired
    private ProductService productService;

    @RequestMapping("/products")
    public List getProducts() {
        return productService.findAll();
    }

    @RequestMapping("/products/{id}")
    public List getProductsByCategory(@PathVariable("id") Long id) {
        return productService.findByCategoryId(id);
    }
}