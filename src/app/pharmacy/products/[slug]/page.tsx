'use client';
import { products } from '@/app/pharmacy/products/data/products';
import Image from 'next/image';

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find(p => p.slug === params.slug);

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
      <p><strong>Price:</strong> {product.price}</p>
    </div>
  );
}
