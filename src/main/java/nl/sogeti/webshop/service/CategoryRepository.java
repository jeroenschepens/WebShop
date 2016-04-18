package nl.sogeti.webshop.service;

import nl.sogeti.webshop.domain.Category;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by schepeje on 11-4-2016.
 */
public interface CategoryRepository extends JpaRepository<Category, Long> {
}