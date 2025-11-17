
'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './best-seller.module.css';
import { products } from '@/app/pharmacy/products/data/products';
import { ProductContent } from '../product-content/product-content';

const BestSeller = React.memo(() => {
    return (
        <section className={styles.bestSellerContainer}>
            {/* Tiêu đề */}
            <div className={styles.bestSellerTitle}>
                <span role="img" aria-label="fire">🔥</span>
                Best-selling Products
            </div>

            {/* Danh sách sản phẩm */}
            <div className={styles.productList}>
                {products.map((product) => (
                    <Link 
                        key={product.slug} 
                        href={`/pharmacy/products/${product.slug}`}
                        className={styles.productCard}
                    >
                        <ProductContent 
                            image={product.image} 
                            title={product.title} 
                            price={product.price} 
                        />
                    </Link>
                ))}
            </div>
        </section>
    );
});

BestSeller.displayName = 'BestSeller';
export default BestSeller;

