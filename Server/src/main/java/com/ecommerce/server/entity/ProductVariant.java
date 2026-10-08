package com.ecommerce.server.entity;

import jakarta.persistence.*;
import lombok.*;

import java.math.BigDecimal;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Builder
@Entity
@Table(name = "product_variants")
public class ProductVariant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "product_id", nullable = false)
    private Product product;

    @Column(name = "sku_code", length = 50, nullable = false, unique = true)
    private String skuCode;

    @Column(name = "color_name", length = 50, nullable = false)
    private String colorName;

    @Column(name = "color_hex", length = 10)
    private String colorHex;

    @Column(name = "internal_storage", length = 20, nullable = false)
    private String internalStorage;

    @Column(name = "ram", length = 20, nullable = false)
    private String ram;

    @Column(name = "original_price", precision = 15, scale = 2, nullable = false)
    private BigDecimal originalPrice;

    @Column(name = "sale_price", precision = 15, scale = 2, nullable = false)
    private BigDecimal salePrice;

    @Builder.Default
    @Column(name = "stock_quantity", nullable = false)
    private Integer stockQuantity = 0;

    @Column(name = "variant_image_url", length = 500)
    private String variantImageUrl;

    @Builder.Default
    @Column(name = "status", length = 20, nullable = false)
    private String status = "ACTIVE";
}
