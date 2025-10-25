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
            {['Pain reliever, Fever reducer, Antibiotic', 'Cardiovascular, Diabetes, Blood fat', 'Nervous', 'Digestive, Liver, Gallbladder', 'Eyes, Ears, Nose, Throat', 'Respiratory', 'Antibiotic, Antifungal'].map((label, i) => (
                
                <button key={`${prefix}-label-${i}`}>{label}
                <Image src={Medicine} alt="medicine" width={20} height={20} />
                </button> 
            ))}
            </div>
            <div className="list-product-footer">
            {['Physiology', 'Musculoskeletal', 'Dermatology, Allergy', 'Cancer drug', 'Weight loss drug, Beauty'].map((label, i) => (
                <button key={`${prefix}-label-${i}`}>{label}
                <Image src={Medicine} alt="medicine" width={20} height={20} />
                </button> 
            ))}    
            </div>
        </section>
    )
}