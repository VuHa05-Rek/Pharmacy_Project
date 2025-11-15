
'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../../common/header/header';
import Footer from '../../common/footer/footer';
import styles from './product-detail.module.css';

export default function ProductDetailClient({ product }: { product: any }) {
  const [quantity, setQuantity] = useState(1);
  const handleIncrease = () => setQuantity((q) => Math.min(q + 1, 99));
  const handleDecrease = () => setQuantity((q) => Math.max(q - 1, 1));

  return (

    <div className={styles.container}>
      <Header />
      <div className={styles.container_header}>
        <div className={styles.imageSection}>
          <Image
            src={product.image}
            alt={product.title}
            width={300}
            height={300}
            className={styles.image}
            priority={false}
          />
        </div>

        <div className={styles.infoSection}>
          <h1>{product.title}</h1>
          <div className= {styles.titlePrice}>
            <p className={styles.price}>{product.price}</p>
          </div>
          
          <div className={styles.infoCommon}>
            <li className={styles.manufacturer}><strong>Manufacturer: </strong>{product.manufacturer}</li>
            <li className={styles.placeOfManufacture}><strong>Place Of Manufacture: </strong>{product.placeOfManufacture}</li>
            <li className={styles.uses}><strong>Uses: </strong>{product.uses ?? product.uses}</li>
          </div>

          <div className={styles.quantityContainer}>
            <div className={styles.select}>
              <p className={styles.selectLabel}>Select Quantity</p>
            </div>
            <div className={styles.quantityInput}>
              <button type="button" className={styles.quantityBtn} onClick={handleDecrease}>-</button>
              <input type="number" className={styles.quantityNumber} value={quantity} readOnly />
              <button type="button" className={styles.quantityBtn} onClick={handleIncrease}>+</button>
            </div>
          </div>

          <button className={styles.buyButton} style={{ marginTop: '1rem' }}>
            🛒 Add to cart
          </button>
        </div>
      </div>

      <div className={styles.container_footer}>
        <h2>Outstanding Features</h2>
        <p>{product.outstanding ?? 'Không có thông tin'}</p>
      </div>
      <Footer />
    </div>
  );
}
