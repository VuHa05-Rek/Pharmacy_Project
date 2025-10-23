'use client';
import React from 'react'
import { StaticImageData } from 'next/image';
import './new-product.css';
import {ProductContent} from '../product-content/product-content';
import Medicine from '../../assets/medicine.png';
import './new-product.css'

interface Product {
    id: number;
    image: StaticImageData;
    title: string;
    price: string;
}

const Product: Product []=[
    {id: 1, image: Medicine, title: "Vitamin C", price: "30.000đ" },
    {id: 1, image: Medicine, title: "Vitamin D", price: "40.000đ" },
    {id: 1, image: Medicine, title: "Vitamin E", price: "10.000đ" },
    {id: 1, image: Medicine, title: "Vitamin B", price: "80.000đ" },
    {id: 1, image: Medicine, title: "Paradol", price: "15.000đ" },
];

const ProductNew = React.memo(() => {
    return (
         <section className="productnew-container">
            <div className="product-new-title">
                <span role="img" aria-label='fire'>🔥</span>
                New Product 
            </div>
            <div className="product-list">
            {Product.map((product) => (
                    <div key={`product-${product.id}`} className="product-card">
                        <ProductContent 
                            image={product.image} 
                            title={product.title} 
                            price={product.price} 
                        />
                    </div>
                ))}
            </div>
         </section>
    )
})

ProductNew.displayName = 'ProductNew'
export default ProductNew