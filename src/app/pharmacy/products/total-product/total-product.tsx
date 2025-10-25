'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import Medicine from '@/app/pharmacy/assets/medicine.png';
import DownArrow from '@/app/pharmacy/assets/down-arrow.png';
import styles from './total-product.module.css';
import { ProductContent } from '../../home';
interface ProductProps {
  prefix: string;
}

interface Product {
    id: number;
    image: StaticImageData;
    title: string;
    price: string;
}
const product : Product[] = [
    { id: 1, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 2, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 3, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 4, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 5, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 6, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 7, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 8, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 9, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 10, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 11, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 12, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 13, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 14, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 15, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 16, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 17, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 18, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 19, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 20, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 21, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 22, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 23, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
    { id: 24, image: Medicine, title: "Vitamin C increases resistance, bottle of 60 tablets", price: "15.000đ" },
   
];

const TotalProduct: React.FC<ProductProps> = ({ prefix }) => {
    return (
        <section className={styles['total-container-product']}>
        <div className={styles['total-product-list']}>
            {product.map((product) => (
                        <div key={`${prefix}-product-${product.id}`} className={styles['product-card']}> 
                            <ProductContent
                              image={product.image}
                              title={product.title}
                              price={product.price}
                            />
                        </div>
                      ))}
        </div>
        
        <div className={styles['see-more']}>
            <button>See More
                <Image src={DownArrow} alt="Down Arrow" width={15} height={15} />
            </button>
            
        </div>

        </section>
    );
}
export default TotalProduct;


