package com.ll.cafeservice.domain.delivery.controller.v1;

import com.ll.cafeservice.api.Result;
import com.ll.cafeservice.domain.delivery.dto.response.DeliveryResponse;
import com.ll.cafeservice.domain.delivery.service.DeliveryService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequiredArgsConstructor
@RequestMapping("/api/delivery/v1")
public class DeliveryController {

    private DeliveryService deliveryService;

    @GetMapping("/{email}")
    public Result<List<DeliveryResponse>> list(
        @PathVariable String email
    ){
        return Result.success(deliveryService.getList(email));
    }
}
