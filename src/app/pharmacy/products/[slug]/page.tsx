
import { products } from '@/app/pharmacy/products/data/products';
import { notFound } from 'next/navigation';
import ProductDetailClient from './ProductDetailClient'; // client component nằm cùng thư mục

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  
  return <ProductDetailClient product={product} />;
}
