"use client";

import React, { useState } from "react";
import { Product } from "./products"; // Product 타입 임포트

interface ClientPageProps {
  products: Product[];
}

export default function ClientPage({ products }: ClientPageProps) {
  const [cartCounts, setCartCounts] = useState<{ [key: number]: number }>({}); // 장바구니에 담긴 상품 개수
  const [selectedCounts, setSelectedCounts] = useState<{
    [key: number]: number;
  }>({}); // 선택한 상품 개수

  const handleAddToCart = (product: Product) => {
    setCartCounts((prevCounts) => {
      const currentCount = prevCounts[product.id] || 0; // 현재 장바구니 개수 가져오기
      return {
        ...prevCounts,
        [product.id]: currentCount + selectedCounts[product.id] || 1,
      }; // 선택한 개수로 장바구니에 추가
    });
    setSelectedCounts((prevCounts) => ({ ...prevCounts, [product.id]: 0 })); // 선택한 개수 초기화
  };

  const handleCountChange = (id: number, count: number) => {
    if (count >= 0) {
      setSelectedCounts((prevCounts) => ({ ...prevCounts, [id]: count })); // 선택한 개수 상태 업데이트
    }
  };

  return (
    <div>
      <h1>상품 조회 및 결제 화면입니다.</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {products.map((product) => {
          const selectedCount = selectedCounts[product.id] || 0; // 선택한 개수 상태 가져오기
          return (
            <li
              key={product.id}
              className="border rounded-lg p-4 shadow-md hover:shadow-lg transition-shadow duration-300 flex justify-between items-center"
            >
              <div>
                <h3 className="text-xl font-semibold">{product.name}</h3>
                <p className="text-lg text-gray-700">{product.price} 원</p>
              </div>
              <div className="flex items-center">
                <input
                  type="number"
                  min="0"
                  value={selectedCount}
                  onChange={(e) => {
                    const newCount = Number(e.target.value);
                    handleCountChange(product.id, newCount); // 선택한 개수 변경
                  }}
                  className="w-16 border rounded-md text-center"
                />
                <button
                  onClick={() => handleAddToCart(product)} // 장바구니에 추가
                  className="ml-4 bg-blue-500 text-white font-semibold py-1 px-3 rounded hover:bg-blue-600 transition-colors duration-300"
                >
                  장바구니에 추가
                </button>
              </div>
            </li>
          );
        })}
      </ul>
      <h2 className="mt-4 text-xl font-semibold">장바구니</h2>
      <ul>
        {Object.entries(cartCounts).map(([id, count]) => (
          <li key={id}>
            상품 ID: {id}, 개수: {count}
          </li>
        ))}
      </ul>
    </div>
  );
}
