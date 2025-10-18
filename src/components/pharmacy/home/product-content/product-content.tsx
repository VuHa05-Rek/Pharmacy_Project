import React from 'react';
import Image from 'next/image';
import { StaticImageData } from 'next/image';
import './product-content.css';

interface ProductContentProps {
  image: StaticImageData;
  title: string;
  price: string;
}

const ProductContent = React.memo<ProductContentProps>(({ image, title, price }) => {
    return (
      <div className="product-item">
        <div className="background-image">
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
          <span className="price">{price}</span>
          <button className="add-to-cart">Add to cart</button>
      </div>
  );
});

ProductContent.displayName = 'ProductContent';

export { ProductContent };
