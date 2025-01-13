import type { paths } from "@/lib/backend/apiV1/schema";
import createClient from "openapi-fetch";
import ClientPage from "./ClientPage";

const client = createClient<paths>({
  baseUrl: "http://localhost:8080",
});

export default async function Page() {
  const request = {};
  const response = await client.POST("/api/v1/order", {
    headers: {
      "Content-Type": "application/json",
    },
    body: request,
  });

  // 응답에서 data 속성을 가져옵니다.
  const body = response.data; // !를 붙이면 undefined일 때 예외가 던져진다.
  if (!body) {
    throw new Error("응답 데이터가 null 또는 undefined입니다.");
  }
  if (body.statusCode !== 200) {
    throw new Error(`HTTP 오류! 상태: ${body.statusCode}`);
  }

  const orderResult = body.data;
  return (
    <>
      <ClientPage orderResult={orderResult} />
    </>
  );
}
