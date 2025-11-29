'use client';
import React from 'react';
import Link from 'next/link';
import { products } from '@/app/pharmacy/products/data/products';
import Image, { StaticImageData } from 'next/image';
import { ProductContent } from '../../product-content/product-content';
import Medicine from '../../../assets/medicine.png';
import Next from '../../../assets/next.png';
import styles from './product_3.module.css';
import { SeeAllButton } from '../../../common/all-product-button/AllProductButton';
interface Product {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
}

interface ProductProps {
  prefix: string; //thêm prefix
}

const product_3 = products.filter((product) => product.category === 'product_3');

const Product_3: React.FC<ProductProps> = React.memo(({ prefix }) => {
  return (
    <section className={styles['container-product']}>
      <div className={styles['head-product']}>
        {[
          'Pain Reliever, Fever Reducer',
          'Cardiovascular',
          'Nerve',
          'Digestion, Liver',
          'Eyes, Ears, Nose, Throat',
        ].map((label, i) => (
          <button key={`${prefix}-label-${i}`}>{label}</button>
        ))}
      </div>

      <div className={styles['product-list-wrapper']}>
        <div className={styles['product-list']}>
          <div className={styles['next-product1']}>
            <Image src={Next} alt="next" width={40} height={40} priority />
          </div>

          {product_3.map((product) => (
            <Link
              key={product.slug}
              href={`/pharmacy/products/${product.slug}`}
              className={styles.productCard}
            >
              <ProductContent image={product.image} title={product.title} price={product.price} />
            </Link>
          ))}

          <div className={styles['next-product2']}>
            <Image src={Next} alt="next" width={40} height={40} priority />
          </div>
        </div>
      </div>

      <div className={styles['all-product']}>
        <SeeAllButton />
      </div>
    </section>
  );
});

Product_3.displayName = 'Product_3';

export default Product_3;
