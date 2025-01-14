

// 상품 타입 정의
export interface Product {
    id: number;
    name: string;
    price: number;
}

export interface ProductListProps {
    products: Product[]; // products 배열의 타입 정의
    onAddToCart: (product: Product, count: number) => void; // onAddToCart의 타입 정의
    onCountChange: (id: number, count: number) => void; // onCountChange의 타입 정의
    counts: { [key: number]: number }; // 상품 ID를 키로 하는 개수 상태
  }
  