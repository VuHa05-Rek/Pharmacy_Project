import { products } from '@/app/pharmacy/products/data/products';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './product-detail.module.css';

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export default async function ProductDetailPage({ params }: { params: { slug: string } }) {
  const product = products.find((p) => p.slug === params.slug);

  if (!product) {
    notFound();
  }

  return (
    <div className={styles.container}>
      <div className={styles.container_header}>
      <div className={styles.imageSection}>
        <Image
          src={product.image}
          alt={product.title}
          width={300}
          height={300}
          className = {styles.image}
        />
      </div>
      <div className={styles.infoSection}>
        <h1>{product.title}</h1>
        <p className={styles.price}>{product.price}</p>

        <p className={styles.description}>{product.ingredients}</p>
        <div className={styles.details}>
          <p className={styles.manufacturer}><strong>Manufacturner:</strong> {product.manufacturer}</p>
          <p className={styles.placeOfManufacture}><strong>Place of manufacture:</strong>{product.placeOfManufacture}</p>
          <p className={styles.uses}><strong>Uses:</strong>{product.uses}</p>
        </div>

        <p><strong>Usage:</strong> {product.usage}</p>
        <p><strong>Ingredients:</strong> {product.ingredients}</p>
      </div>
    </div>
    </div>
  );
}
