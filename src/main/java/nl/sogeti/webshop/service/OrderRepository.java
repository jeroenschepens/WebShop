package nl.sogeti.webshop.service;

import nl.sogeti.webshop.domain.CustomerOrder;
import org.springframework.data.jpa.repository.JpaRepository;

/**
 * Created by schepeje on 19-4-2016.
 */
public interface OrderRepository extends JpaRepository<CustomerOrder, Long> {
}