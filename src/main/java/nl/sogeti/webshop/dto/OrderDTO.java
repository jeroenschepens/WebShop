package nl.sogeti.webshop.dto;

import nl.sogeti.webshop.domain.CustomerData;

import java.util.Map;

/**
 * Created by schepeje on 19-4-2016.
 */
public class OrderDTO {

    private Map<Long, Integer> orderLines;

    private CustomerData customerData;

    public Map<Long, Integer> getOrderLines() {
        return orderLines;
    }

    public void setOrderLines(Map<Long, Integer> orderLines) {
        this.orderLines = orderLines;
    }

    public CustomerData getCustomerData() {
        return customerData;
    }

    public void setCustomerData(CustomerData customerData) {
        this.customerData = customerData;
    }

    @Override
    public String toString() {
        return "OrderDTO{" +
                "orderLines=" + orderLines +
                ", customerData=" + customerData +
                '}';
    }
}