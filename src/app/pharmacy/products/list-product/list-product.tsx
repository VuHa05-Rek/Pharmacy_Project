'use client';
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import Medicine from '@/app/pharmacy/assets/medicine.png';
import './list-product.css';

interface ProductProps {
  prefix: string;
}

export default function ListProduct({ prefix }: ProductProps) {
  const categories = [
    { label: 'Pain reliever, fever reducer, antibiotic', slug: 'pain-relief' },
    { label: 'Cardiovascular, diabetes, blood fat', slug: 'heart-diabetes' },
    { label: 'Nervous', slug: 'nervous' },
    { label: 'Digestive, liver, gallbladder', slug: 'digestive' },
    { label: 'Eyes, ears, nose, throat', slug: 'ent' },
    { label: 'Respiratory', slug: 'respiratory' },
    { label: 'Antibiotic, antifungal', slug: 'antibiotic' },
    { label: 'Physiology', slug: 'physiology' },
    { label: 'Musculoskeletal', slug: 'musculoskeletal' },
    { label: 'Dermatology, allergy', slug: 'dermatology' },
    { label: 'Oncology', slug: 'oncology' },
    { label: 'Beauty', slug: 'beauty' },
  ];

  return (
    <section className="container-list-product">
      <div className="list-product-header">
        {categories.map((item, i) => (
          <Link 
            key={`${prefix}-${i}`} 
            href={`/pharmacy/products/${item.slug}`} 
            className="product-item"
          >
            <Image src={Medicine} alt="medicine" />
            <span>{item.label}</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
