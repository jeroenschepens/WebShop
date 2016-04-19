package nl.sogeti.webshop.domain;

import javax.persistence.*;

/**
 * Created by schepeje on 19-4-2016.
 */

@Entity
@Table(uniqueConstraints = {
        @UniqueConstraint(columnNames = {"product_id", "order_ref"})})
public class OrderLine {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne
    private Product product;

    private Integer quantity;

    public OrderLine() {
    }

    public OrderLine(Product product, Integer quantity) {
        this.product = product;
        this.quantity = quantity;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Product getProduct() {
        return product;
    }

    public void setProduct(Product product) {
        this.product = product;
    }

    public Integer getQuantity() {
        return quantity;
    }

    public void setQuantity(Integer quantity) {
        this.quantity = quantity;
    }
}