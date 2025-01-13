package com.ll.cafeservice.domain.delivery.controller.v1;

import com.ll.cafeservice.api.Result;
import com.ll.cafeservice.domain.delivery.dto.response.DeliveryResponse;
import com.ll.cafeservice.domain.delivery.service.DeliveryService;
import io.swagger.v3.oas.annotations.tags.Tag;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Tag(name = "DeliveryControllerV1", description = "API 배송관련 컨트롤러")
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/v1/delivery")
public class DeliveryControllerV1 {

    private DeliveryService deliveryService;

    @GetMapping("/{email}")
    public Result<List<DeliveryResponse>> list(
        @PathVariable String email
    ){
        return Result.success(deliveryService.getList(email));
    }
}
