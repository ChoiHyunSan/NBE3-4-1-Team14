"use client";

import type { components } from "@/lib/backend/apiV1/schema";

export default function ClientPage({
  orderResult,
}: {
  orderResult: components["schemas"]["OrderResponse"];
}) {
  return (
    <>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            console.log("hello");
            // 만약 폼 처리를 통해 화면을 변환해야 한다면 router 사용법을 참고하자.
          }}
        >
          <button>버튼이에요</button>
        </form>
      </div>
      <div>
        소개
        <ul>
          <li>주문 ID: {orderResult.id}</li>
          <li>주문 이름: {orderResult.name}</li>
        </ul>
      </div>
    </>
  );
}
