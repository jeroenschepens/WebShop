package nl.sogeti.webshop.rest;

import nl.sogeti.webshop.domain.Product;
import nl.sogeti.webshop.service.ProductService;
import nl.sogeti.webshop.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;

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
        return productService.findProducts();
    }

    @RequestMapping("/products/{id}")
    public Product getProductById(@PathVariable("id") Long id) {
        return productService.findById(id);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/products", method = RequestMethod.PUT)
    public Product saveProduct(@RequestBody Product product) {
        if (product.getId() == null) {
            product.setActive(true);
        }
        return productService.saveProduct(product);
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/products/{id}", method = RequestMethod.DELETE)
    public void deleteProduct(@PathVariable("id") Long id) {
        try {
            productService.deleteProduct(id);
        } catch (Exception ex) {
            productService.setProductActive(id, false);
        }
    }

    @PreAuthorize("hasRole('ROLE_ADMIN')")
    @RequestMapping(value = "/products/{id}/activate", method = RequestMethod.GET)
    public void activateProduct(@PathVariable("id") Long id) {
        productService.setProductActive(id, true);
    }
}