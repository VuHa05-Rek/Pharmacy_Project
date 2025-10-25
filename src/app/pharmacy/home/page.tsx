'use client';

import React from 'react';
import { ProductSlider } from './product-slider';
import './product-slider.css';

export default function PharmacyHome() {
    return (
        <div className="pharmacy-home">
            <ProductSlider title="Best-selling Products" />
            <ProductSlider title="New Products" />
        </div>
    );
}