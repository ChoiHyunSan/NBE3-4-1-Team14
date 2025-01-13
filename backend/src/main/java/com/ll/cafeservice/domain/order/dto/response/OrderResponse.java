package com.ll.cafeservice.domain.order.dto.response;

import io.swagger.v3.oas.annotations.media.Schema;
import org.springframework.lang.NonNull;

public record OrderResponse (
    @Schema(description = "주문 ID")
    @NonNull
    Long id,
    
    @Schema(description = "주문 이름")
    @NonNull
    String name
) {}
