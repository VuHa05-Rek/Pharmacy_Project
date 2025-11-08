
// 'use client';
// import React from 'react';
// import { useParams } from 'next/navigation';
// import Image from 'next/image';
// import { products } from '../data/products'; 

// export default function ProductDetailPage() {
//   const params = useParams();
//   const slug = params?.slug as string;
//   const product = products.find(p => p.slug === slug);

//   if (!product) {
//     return <div style={{ padding: 20 }}>Product not found</div>;
//   }

//   return (
//     <div style={{ padding: 20 }}>
//       <h1>{product.title}</h1>
//       <Image src={product.image} alt={product.title} width={300} height={300} />
//       <p><strong>Price:</strong> {product.price}</p>
//       <p>{product.description}</p>
//     </div>
//   );
// }
import React from 'react';
import Image from 'next/image';
import { products } from '@/app/pharmacy/products/data/products';

interface ProductPageProps {
  params: { id: string };
}

export default function ProductDetailPage({ params }: ProductPageProps) {
  const product = products.find((p) => p.id.toString() === params.id);

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div style={{ padding: '2rem' }}>
      <h1>{product.title}</h1>
      <Image
        src={product.image}
        alt={product.title}
        width={300}
        height={300}
        style={{ objectFit: 'contain' }}
      />
      <p style={{ marginTop: '1rem', fontSize: '1.2rem' }}>{product.price}</p>
      <p style={{ color: '#555', marginTop: '1rem' }}>
        Đây là phần mô tả chi tiết sản phẩm: {product.title}
      </p>
      <button style={{ marginTop: '1rem', padding: '0.5rem 1rem' }}>
        Add to cart
      </button>
    </div>
  );
}
