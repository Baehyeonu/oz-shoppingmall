'use client';

import { useEffect, useState } from 'react';
import ProductCard from '../ui/ProductCard';
import { productApi, Product } from '../../lib/api';
import { getErrorMessage, tokenUtils } from '../../lib/helpers';
import { useCartStore } from '../../store/cartStore';

// 상품 목록 클라이언트 컴포넌트
const ProductsClient = () => {
  // TODO: 상태 관리를 위한 useState를 설정하세요
  // 힌트 1: products (Product[] 타입), loading (boolean), error (string | null) 상태가 필요합니다
  // 힌트 2: useCartStore에서 addItem, loading (cartLoading으로), error (cartError로) 를 가져오세요

  // TODO: useEffect로 컴포넌트 마운트 시 상품 데이터를 로드하세요
  // 힌트 1: fetchProducts 함수를 만들어 productApi.getAll()을 호출하세요
  // 힌트 2: 받아온 data.products를 setProducts로 설정하세요
  // 힌트 3: try-catch-finally로 에러와 로딩 상태를 관리하세요
  // 힌트 4: useEffect의 dependency array는 빈 배열 []로 설정하세요

  const addToCart = async (productId: number) => {
    // TODO: 장바구니 추가 기능을 구현하세요
    // 힌트 1: tokenUtils.exists()로 로그인 여부를 확인하세요
    // 힌트 2: 로그인되지 않았으면 alert을 띄우고 return하세요
    // 힌트 3: addItem(productId, 1)을 호출하여 장바구니에 추가하세요
    // 힌트 4: 성공 시 alert으로 알림을 표시하세요
    // 힌트 5: try-catch로 에러를 처리하세요
  };

  // 로딩 중일 때 표시할 UI
  if (loading) {
    return <div className="text-center mt-10">로딩 중...</div>;
  }

  // 에러 발생 시 표시할 UI
  if (error) {
    return <div className="text-center mt-10 text-red-500">오류: {error}</div>;
  }

  // 메인 상품 목록 페이지 렌더링
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-10 text-center text-gray-800">전체 상품</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={addToCart}
              isAddingToCart={cartLoading}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductsClient;
