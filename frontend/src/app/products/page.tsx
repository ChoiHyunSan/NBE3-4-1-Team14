import ClientPage from "./ClientPage";
import { Product } from "./products"; // Product 타입 임포트

// 서버에서 데이터를 가져오는 함수 (예시)
// async function fetchProducts(): Promise<Product[]> {
//   const response = await fetch("/api/products");
//   return response.json();
// }

export default async function Page() {
  // 임의의 상품 데이터 생성
  const products: Product[] = [
    { id: 1, name: "상품 1", price: 10000 },
    { id: 2, name: "상품 2", price: 20000 },
    { id: 3, name: "상품 3", price: 30000 },
    { id: 4, name: "상품 4", price: 40000 },
    { id: 5, name: "상품 5", price: 50000 },
  ];

  return <ClientPage products={products} />;
}
