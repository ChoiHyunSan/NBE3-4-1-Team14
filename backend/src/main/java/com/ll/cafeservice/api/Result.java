package com.ll.cafeservice.api;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.*;

@Data
@Builder
@AllArgsConstructor(access = AccessLevel.PROTECTED)
@NoArgsConstructor(access = AccessLevel.PROTECTED)
@Schema(description = "결과 반환용 객체")
public class Result<T> {

    @Schema(description = "상태 코드")
    private int statusCode;

    @Schema(description = "클라 전달용 메시지")
    private String message;

    @Schema(description = "반환 데이터")
    private T data;

    public static <T> Result<T> success(final T data) {
        return createResult(200, "Success", data);
    }

    public static <T> Result<T> error(final int statusCode, final String message) {
        return createResult(statusCode, message, null);
    }

    public static <T> Result<T> createResult(final int statusCode, final String message, final T data) {
        return Result.<T>builder()
                .statusCode(statusCode)
                .message(message)
                .data(data)
                .build();
    }
}