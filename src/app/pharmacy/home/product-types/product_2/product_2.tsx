'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ProductContent } from '../../product-content/product-content';
import Medicine from '../../../assets/medicine.png';
import Next from '../../../assets/next.png';
import styles from './product_2.module.css';
import { SeeAllButton } from '../../../common/all-product-button/AllProductButton';
interface Product {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
}

interface ProductProps {
  prefix: string; // ✅ thêm prefix
}

const products: Product[] = [
  { id: 1, image: Medicine, title: "Vitamin C", price: "15.000đ" },
  { id: 2, image: Medicine, title: "Vitamin C", price: "15.000đ" },
  { id: 3, image: Medicine, title: "Vitamin C", price: "15.000đ" },
  { id: 4, image: Medicine, title: "Vitamin C", price: "15.000đ" },
  { id: 5, image: Medicine, title: "Vitamin C", price: "15.000đ" },
];

const Product_2: React.FC<ProductProps> = React.memo(({ prefix }) => {
  return (
    <section className={styles['container-product']}>
      <div className={styles['head-product']}>
        {['Pain Reliever, Fever Reducer', 'Cardiovascular', 'Nerve', 'Digestion, Liver', 'Eyes, Ears, Nose, Throat'].map((label, i) => (
          <button key={`${prefix}-label-${i}`}>{label}</button> 
        ))}
      </div>

      <div className={styles['product-list-wrapper']}>
        <div className={styles['product-list']}>
          <div className={styles['next-product1']}>
            <Image 
              src={Next} 
              alt="next" 
              width={40} 
              height={40} 
              priority/>
          </div>

          {products.map((product) => (
            <div key={`${prefix}-product-${product.id}`} className={styles['product-card']}> 
              <ProductContent
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}

          <div className={styles['next-product2']}>
            <Image 
                src={Next} 
                alt="next" 
                width={40} 
                height={40} 
                priority />
          </div>
        </div>
      </div>

      <div className={styles['all-product']}>
        <SeeAllButton />
      </div>
    </section>
  );
});

Product_2.displayName = 'Product_2';

export default Product_2;
