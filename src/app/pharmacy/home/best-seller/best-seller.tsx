'use client';

import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import styles from './best-seller.module.css';
import { ProductContent } from '../product-content/product-content';
import Medicine from '../../assets/medicine.png';

interface Product {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
}


const products: Product[] = [
    { id: 1, image: Medicine, title: "Nat C 1000 hỗ trợ tăng đề kháng lọ 60 viên", price: "105.000đ" },
    { id: 2, image: Medicine, title: "Paracetamol 500mg hộp 10 vỉ x 10 viên", price: "48.000đ" },
    { id: 3, image: Medicine, title: "Vitamin E 400IU hỗ trợ làm đẹp da lọ 100 viên", price: "150.000đ" },
    { id: 4, image: Medicine, title: "Fish Oil Omega-3 hỗ trợ tim mạch hộp 30 viên", price: "200.000đ" },
    { id: 5, image: Medicine, title: "Kẽm Gluconate hỗ trợ tăng cường miễn dịch hộp 30 viên", price: "90.000đ" },
];

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
                    <div key={`product-${product.id}`} className={styles.productCard}>
                        <ProductContent 
                            image={product.image} 
                            title={product.title} 
                            price={product.price} 
                        />
                    </div>
                ))}
            </div>
        </section>
    );
});

BestSeller.displayName = 'BestSeller';

export default BestSeller;


