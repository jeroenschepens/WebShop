package nl.sogeti.webshop.rest;

import nl.sogeti.webshop.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

/**
 * Created by schepeje on 11-4-2016.
 */
@RestController
public class CategoryController {

    @Autowired
    private CategoryService categoryService;

    @RequestMapping("/categories")
    public List getCategories() {
        return categoryService.findAll();
    }
}