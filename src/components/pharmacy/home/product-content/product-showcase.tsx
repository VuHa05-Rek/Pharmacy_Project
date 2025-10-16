import React from 'react';
import Image from 'next/image';
import './product-content.css';

import plus from '../../assets/plus.png';
import chat from '../../assets/chat.png';
import guarantee from '../../assets/guarantee.png';
import freeshipping from '../../assets/free-shipping.png';
import facebook from '../../assets/facebook.png';
import gmail from '../../assets/gmail.png';
import google from '../../assets/google.png';
import slogan from '../../assets/slogan.png';
import medicine from '../../assets/medicine.png';
import bestseller from '../../assets/bestseller.png';

const socialIcons = [
  { src: facebook, alt: 'facebook' },
  { src: gmail, alt: 'gmail' },
  { src: google, alt: 'google' },
  { src: slogan, alt: 'slogan'}
];

const ProductShowcase = React.memo(() => {
    return (
      <div className="container-content">
          <div className="slogan">
              <Image src={slogan} alt="slogan"/>
          </div>
          <div className="all-product">
              <div className="product-bestseller">
                  <div className="name-bestseller">
                      <Image src={bestseller} alt="bestseller"/>
                      <p>PRODUCT BESTSELLER</p>
                  </div>
                  <div className="list-bestseller">
                      <Image src={medicine} alt="medicine"/>
                      <div className="info-medicine">
                          <p>Nat C 1000 supports increased resistance, bottle of 60 tablets</p>
                          <span>Price: 120,000đ</span>
                      </div>
                      <button className="add-to-cart">Add to cart</button>
                  </div>
              </div>
          </div>
      </div>
  );
});

ProductShowcase.displayName = 'ProductShowcase';

export { ProductShowcase };
