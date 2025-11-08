'use client';

import React, { useRef, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Medicine from '@/app/pharmacy/assets/medicine.png';
import { products } from '@/app/pharmacy/products/data/products';
interface Product {
    id: number;
    image: any;
    title: string;
    price: string;
}

// const products: Product[] = [
//     { id: 1, image: Medicine, title: "Nat C 1000 hỗ trợ tăng đề kháng lọ 60 viên", price: "105.000đ" },
//     { id: 2, image: Medicine, title: "Paracetamol 500mg hộp 10 vỉ x 10 viên", price: "48.000đ" },
//     { id: 3, image: Medicine, title: "Vitamin E 400IU hỗ trợ làm đẹp da lọ 100 viên", price: "150.000đ" },
//     { id: 4, image: Medicine, title: "Fish Oil Omega-3 hỗ trợ tim mạch hộp 30 viên", price: "200.000đ" },
//     { id: 5, image: Medicine, title: "Kẽm Gluconate hỗ trợ tăng cường miễn dịch", price: "90.000đ" },
// ];

export const ProductSlider = ({ title }: { title: string }) => {
    const sliderRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleResize = () => {
            if (sliderRef.current) {
                sliderRef.current.style.visibility = 'visible';
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="product-section">
            <h2 className="product-section-title">
                <span>🔥</span> {title}
            </h2>
            <div 
                ref={sliderRef} 
                className="product-slider"
                style={{ visibility: 'hidden' }}
            >
                {products.map((product) => (
                    <Link 
                            href={`/pharmacy/products/${product.id}`} 
                            key={product.id}
                            className="product-card">
                        
                            <div className="product-image">
                            <Image
                                src={product.image}
                                alt={product.title}
                                width={200}
                                height={200}
                                layout="responsive"
                            />
                            </div>
                            <div className="product-info">
                            <h3>{product.title}</h3>
                            <p className="product-price">{product.price}</p>
                            <button className="add-to-cart">Add to cart</button>
                            </div>
                        </Link>
                    ))}

            </div>
        </div>
    );
};