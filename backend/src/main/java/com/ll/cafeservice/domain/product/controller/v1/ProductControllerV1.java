package com.ll.cafeservice.domain.product.controller.v1;

import com.ll.cafeservice.api.Result;
import com.ll.cafeservice.domain.product.dto.request.ProductCreateRequest;
import com.ll.cafeservice.domain.product.dto.response.ProductCreateResponse;
import com.ll.cafeservice.domain.product.dto.response.ProductInfoResponse;
import com.ll.cafeservice.domain.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@RestController
@RequiredArgsConstructor
@RequestMapping("/api/product/v1")
public class ProductControllerV1 {

    private final ProductService productService;

    @PostMapping
    public Result<ProductCreateResponse> createProduct(
            @RequestBody ProductCreateRequest request
    ){
        return Result.success(productService.addProduct(request));
    }

    // 필요 시, 페이징 기능을 넣어볼 수 있다.
    @GetMapping("/list")
    public Result<List<ProductInfoResponse>> list(
    ){
        return Result.success(productService.getList());
    }
}
