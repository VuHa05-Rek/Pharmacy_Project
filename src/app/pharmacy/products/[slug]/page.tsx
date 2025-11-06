// src/app/pharmacy/products/[slug]/page.tsx
'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Image from 'next/image';
import { products } from '../data/products'; // đường dẫn tương đối tới data

export default function ProductDetailPage() {
  const params = useParams();
  const slug = params?.slug as string;
  const product = products.find(p => p.slug === slug);

  if (!product) {
    return <div style={{ padding: 20 }}>Product not found</div>;
  }

  return (
    <div style={{ padding: 20 }}>
      <h1>{product.title}</h1>
      <Image src={product.image} alt={product.title} width={300} height={300} />
      <p><strong>Price:</strong> {product.price}</p>
      <p>{product.description}</p>
    </div>
  );
}
