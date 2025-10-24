'use client';
import React from 'react';
import Image, { StaticImageData } from 'next/image';
import { ProductContent } from '../../product-content/product-content';
import Medicine from '../../../assets/medicine.png';    
import Next from '../../../assets/next.png';
import './product_3.css';
import { SeeAllButton } from '../../../common/all-product-button/AllProductButton';
interface Product {
  id: number;
  image: StaticImageData;
  title: string;
  price: string;
}

interface ProductProps {
  prefix: string; // ✅ thêm prefix
}

const products: Product[] = [
  { id: 1, image: Medicine, title: "Vitamin C", price: "15.000đ" },
  { id: 2, image: Medicine, title: "Vitamin C", price: "15.000đ" },
  { id: 3, image: Medicine, title: "Vitamin C", price: "15.000đ" },
  { id: 4, image: Medicine, title: "Vitamin C", price: "15.000đ" },
  { id: 5, image: Medicine, title: "Vitamin C", price: "15.000đ" },
];

const Product_3: React.FC<ProductProps> = React.memo(({ prefix }) => {
  return (
    <section className="container-product">
      <div className="head-product">
        {['Pain Reliever, Fever Reducer', 'Cardiovascular', 'Nerve', 'Digestion, Liver', 'Eyes, Ears, Nose, Throat'].map((label, i) => (
          <button key={`${prefix}-label-${i}`}>{label}</button> 
        ))}
      </div>

      <div className="product-list-wrapper">
        <div className="product-list">
          <div className="next-product1">
            <Image src={Next} alt="next" width={40} height={40} />
          </div>

          {products.map((product) => (
            <div key={`${prefix}-product-${product.id}`} className="product-card"> {/* ✅ key duy nhất */}
              <ProductContent
                image={product.image}
                title={product.title}
                price={product.price}
              />
            </div>
          ))}

          <div className="next-product2">
            <Image src={Next} alt="next" width={40} height={40} />
          </div>
        </div>
      </div>

      <div className="all-product">
        <SeeAllButton />
      </div>
    </section>
  );
});

Product_3.displayName = 'Product_33';

export default Product_3;
