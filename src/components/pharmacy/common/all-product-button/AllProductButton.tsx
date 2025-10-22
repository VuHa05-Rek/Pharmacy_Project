'use client';

import React from 'react';
import { useRouter } from 'next/navigation';
import './all-product-button.css';

export default function AllProductButton() {
  const router = useRouter();

  const handleClick = () => {
    router.push('/all-product'); // chuyển hướng đến trang /products
  };

  return (
    <button className="all-product-btn" onClick={handleClick}>
      All Product
    </button>
  );
}
