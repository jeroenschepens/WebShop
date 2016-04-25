package nl.sogeti.webshop.service;

import nl.sogeti.webshop.domain.CustomerOrder;
import nl.sogeti.webshop.domain.OrderLine;
import nl.sogeti.webshop.domain.Product;
import nl.sogeti.webshop.dto.OrderDTO;
import nl.sogeti.webshop.util.SecurityUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;

/**
 * Created by schepeje on 11-4-2016.
 */
@Service
@Transactional
public class ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private OrderRepository orderRepository;

    public List<Product> findProducts() {
        if (!SecurityUtils.isAdmin()) {
            return productRepository.findByActiveTrue();
        } else {
            return productRepository.findAll();
        }
    }

    public Product findById(Long id) {
        return productRepository.findById(id);
    }

    public Product saveProduct(Product product) {
        return productRepository.save(product);
    }

    public void deactivateProduct(Long id) {
        Product product = productRepository.findById(id);
        if (product != null) {
            product.setActive(false);
            productRepository.save(product);
        }
    }

    public CustomerOrder placeOrder(OrderDTO orderRequest) {
        CustomerOrder order = new CustomerOrder();
        order.setUser(SecurityUtils.getCurrentUser());
        order.setDate(LocalDate.now());
        order.setOrderLines(new ArrayList<>());
        order.setCustomerData(orderRequest.getCustomerData());
        boolean hasLines = false;
        for (Product product : productRepository.findByIdIn(new ArrayList<>(orderRequest.getOrderLines().keySet()))) {
            hasLines = true;
            OrderLine orderLine = new OrderLine(product, orderRequest.getOrderLines().get(product.getId()), product.getPrice());
            order.getOrderLines().add(orderLine);
        }
        if (!hasLines) {
            throw new RuntimeException("Order must have lines!");
        }
        orderRepository.save(order);
        return order;
    }
}