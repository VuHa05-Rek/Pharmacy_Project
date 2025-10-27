import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import styles from './product-content.module.css';
// import './product-content.module.css';
// import './product-content.css';

interface ProductContentProps {
  image: StaticImageData;
  title: string;
  price: string;
}

const ProductContent = React.memo<ProductContentProps>(({ image, title, price }) => {
    return (
      <div className={styles.productItem}>
        <div className={styles.backgroundImage}>
          <Image 
            src={image} 
            alt={title} 
            width={160} 
            height={160}
            style={{ objectFit: 'contain' }}
            priority={false}
          />
          </div>
          <p>{title}</p>
          <span className={styles.price}>{price}</span>
          <button className={styles.addToCart}>Add to cart</button>
      </div>
  );
});

ProductContent.displayName = 'ProductContent';

export { ProductContent };
