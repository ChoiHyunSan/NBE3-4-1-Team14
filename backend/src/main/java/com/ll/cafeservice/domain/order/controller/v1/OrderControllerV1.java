package com.ll.cafeservice.domain.order.controller.v1;

import com.ll.cafeservice.api.Result;
import com.ll.cafeservice.domain.order.dto.request.OrderRequest;
import com.ll.cafeservice.domain.order.dto.response.OrderResponse;
import com.ll.cafeservice.domain.order.service.OrderService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/order/v1")
public class OrderControllerV1 {

    private final OrderService orderService;

    /**
     *  주문요청 비즈니스 로직 처리후, 처리결과를 반환
     * @param request 주문요청 정보
     * @return 주문요청 결과
     */
    @PostMapping
    public Result<OrderResponse> order(
        @RequestBody OrderRequest request
    ){
        return Result.success(orderService.order(request));
    }
}
