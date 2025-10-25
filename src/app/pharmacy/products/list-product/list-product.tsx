'use client';
import React from 'react';
import './list-product.css';
import Image, { StaticImageData } from 'next/image';
import Medicine from '@/app/pharmacy/assets/medicine.png';

// interface Product {
//     id: number;
//     image: StaticImageData;
//     title: string;
//     price: string;
// }

interface ProductProps {
    prefix: string;
}

export default function ListProduct({ prefix }: ProductProps) {
    return (
        <section className="container-list-product">
            <div className="list-product-header">
            {['Pain reliever, fever reducer, antibiotic', 'cardiovascular, diabetes, blood fat', 'nervous', 'digestive, liver, gallbladder', 'Eyes, Ears, Nose, Throat', 'respiratory', 'antibiotic, antifungal'].map((label, i) => (
                <button key={`${prefix}-label-${i}`}>{label}</button> 
            ))}
            </div>
            <div className="list-product-footer">
            {['physiology', 'musculoskeletal', 'dermatology, allergy', 'cancer drug', 'weight loss drug, beauty'].map((label, i) => (
                <button key={`${prefix}-label-${i}`}>{label}</button> 
            ))}    
            </div>
        </section>
    )
}