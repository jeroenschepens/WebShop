package nl.sogeti.webshop.rest;

import nl.sogeti.webshop.domain.CustomerOrder;
import nl.sogeti.webshop.dto.OrderDTO;
import nl.sogeti.webshop.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.Map;

/**
 * Created by schepeje on 19-4-2016.
 */
@RestController
public class OrderController {

    @Autowired
    private ProductService productService;

    @RequestMapping(value = "/orders", method = RequestMethod.POST)
    public Map<String, Long> placeOrder(@RequestBody OrderDTO orderRequest) {
        CustomerOrder order = productService.placeOrder(orderRequest);
        Map<String, Long> id = new HashMap<>();
        id.put("id", order.getId());
        return id;
    }
}