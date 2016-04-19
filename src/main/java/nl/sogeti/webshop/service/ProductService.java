package nl.sogeti.webshop.service;

import nl.sogeti.webshop.domain.CustomerOrder;
import nl.sogeti.webshop.domain.OrderLine;
import nl.sogeti.webshop.domain.Product;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

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

    public List<Product> findAll() {
        return productRepository.findAll();
    }

    public List<Product> findByCategoryId(Long categoryId) {
        return productRepository.findByCategoryId(categoryId);
    }

    public void placeOrder(Map<Long, Integer> lines) {
        CustomerOrder order = new CustomerOrder();
        order.setOrderLines(new ArrayList<>());
        for (Product product : productRepository.findByIdIn(new ArrayList<>(lines.keySet()))) {
            OrderLine orderLine = new OrderLine(product, lines.get(product.getId()));
            order.getOrderLines().add(orderLine);
        }
        orderRepository.save(order);
    }
}