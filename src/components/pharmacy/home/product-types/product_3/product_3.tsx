'use client';
import React from 'react';
import Image from 'next/image';
import { ProductContent } from '../../product-content/product-content';
import Medicine from '../../../assets/medicine.png';
import Next from '../../../assets/next.png';
import { StaticImageData } from 'next/image';
import './product_3.css';

interface Product {
    id: number;
    image: StaticImageData;
    title: string;
    price: string;
}

const products: Product[] = [
    {id: 1, image: Medicine, title: "Vitamin C", price: "15.000đ"},
    {id: 2, image: Medicine, title: "Vitamin C", price: "15.000đ"},
    {id: 3, image: Medicine, title: "Vitamin C", price: "15.000đ"},
    {id: 4, image: Medicine, title: "Vitamin C", price: "15.000đ"},
    {id: 5, image: Medicine, title: "Vitamin C", price: "15.000đ"}
]

const Product_3 = React.memo (() => {
    return (
        <section className="container-product">
            <div className="head-product">
                <button>Thermometer</button>
                <button>Blood Pressure Monitor</button>
                <button>Blood Glucose MMeter</button>
                <button>Face Mask</button>              
                <button>Kit test Covid</button>
                
            </div>
            <div className="product-list-wrapper">
            <div className="product-list">
                <div className="next-product1">
                    <Image 
                        src={Next}
                        alt="next"
                        width={40}
                        height={40}
                    />
                </div>
                    
                {products.map((product) => (
                    <div key={product.id} className="product-card">
                        <ProductContent
                            image = {product.image}
                            title = {product.title}
                            price = {product.price}
                        />
                    </div>
                ))}
                <div className="next-product2">
                    <Image 
                        src={Next}
                        alt="next"
                        width={40}
                        height={40}
                    />
                </div>
            </div>
            </div>
            
            <div className="all-product">
                <button>See all</button>
            </div>
        </section>
    );
});

Product_3.displayName = 'Product_3';

export default Product_3;
