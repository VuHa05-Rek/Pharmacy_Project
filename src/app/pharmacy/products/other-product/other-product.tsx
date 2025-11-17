'use client'
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ProductContent } from '../../home/product-content/product-content';
import Medicine from '../../../pharmacy/assets/medicine.png';
import Next from '../../../pharmacy/assets/next.png';
import styles from './other-product.module.css';

interface OtherProductType {
    id: number;
    image: StaticImageData;
    title: string;
    price: string;
}

// BỎ interface ProductProps (hoặc ProductProps) vì không còn cần thiết
// interface ProductProps {
//   prefix: string;
// }

const products: OtherProductType[] = [
    { id: 1, image: Medicine, title: "Vitamin C", price: "15.000đ" },
    { id: 2, image: Medicine, title: "Vitamin C", price: "15.000đ" },
    { id: 3, image: Medicine, title: "Vitamin C", price: "15.000đ" },
    { id: 4, image: Medicine, title: "Vitamin C", price: "15.000đ" },
    { id: 5, image: Medicine, title: "Vitamin C", price: "15.000đ" },
];

export function OtherProduct() {
    return (
        <div className={styles['other-product-wrapper']}>
            <div className={styles['other-product-list']}>
                <div className={styles['other-next-product1']}>
                    <Image 
                        src={Next} 
                        alt="next" 
                        width={40} 
                        height={40}
                        priority
                    />
                </div>

                {products.map((product) => (
                    <div key={`product-${product.id}`} className={styles['other-product-card']}>
                        <ProductContent
                            image={product.image}
                            title={product.title}
                            price={product.price}
                        />
                    </div>
                ))}

                <div className={styles['other-next-product2']}>
                    <Image 
                        src={Next} 
                        alt="next" 
                        width={40} 
                        height={40}
                        priority
                    />
                </div>
            </div>
        </div>
    )
}