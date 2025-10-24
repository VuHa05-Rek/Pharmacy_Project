import React from 'react';
import Link from 'next/link';
import './footer.css';

import plus from '../../assets/plus.png';
import chat from '../../assets/chat.png';
import guarantee from '../../assets/guarantee.png';
import freeshipping from '../../assets/free-shipping.png';
import facebook from '../../assets/facebook.png';
import gmail from '../../assets/gmail.png';
import google from '../../assets/google.png';

export function PharmacyFooter (){
  const commits = [
    { src: plus, label: 'Genuine Medicine' },
    { src: guarantee, label: 'Quality Commitment' },
    { src: chat, label: 'Consulting Support' },
    { src: freeshipping, label: 'Free Shipping' },
  ];

  const introLinks = [
    'Introducing Pharmacy',
    'Online Shopping Guide',
    'Delivery policy',
    'Payment policy',
    'Return and warranty policy',
    'Privacy Policy',
    'Membership points rules',
  ];

  const productList = [
    'Medicine',
    'Functional food',
    'Pharmaceuticals - Cosmetics',
    'Medical equipment',
  ];

  const socialIcons = [
    { src: facebook, alt: 'facebook' },
    { src: gmail, alt: 'gmail' },
    { src: google, alt: 'google' },
  ];

  return (
    <div className="footer">
      {/* Commit section */}
      <div className="comit">
        <div className="comits">
          {commits.map((item) => (
            <div className="commit-item" key={item.label}>
              <img src={item.src.src} alt={item.label} />
              <span>{item.label}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Info section */}
      <div className="container-bottom">
        <div className="info">
          <h1>HoangHa Pharmacy</h1>
          <div className="company-pharmacy">
            <h2>Hoang Ha Pharmacy Joint Stock Company</h2>
            <p>123, Department of Planning and Investment, Ho Chi Minh City</p>
            <p>Address: XXX Au Co, Tan Phu District, Ho Chi Minh City</p>
            <p>Email: sale@hoanghaPharmacy.com</p>
          </div>
        </div>

        {/* Sub-sections */}
        <div className="sub-section">
          <div className="intro">
            <h1>INTRODUCTION</h1>
            {introLinks.map((text) => (
              <Link key={text} href="#" className="footer-link">
                {text}
              </Link>
            ))}
          </div>

          <div className="product-catalog">
            <h1>PRODUCT LIST</h1>
            {productList.map((text) => (
              <Link key={text} href="#" className="footer-link">
                {text}
              </Link>
            ))}
          </div>

          <div className="connect">
            <h1>Connect with us</h1>
            <div className="icon-app">
              {socialIcons.map((icon) => (
                <img key={icon.alt} src={icon.src.src} alt={`${icon.alt}-icon`} />
              ))}
            </div>
            <span>Hotline: XXX-456-789</span>
          </div>
        </div>
      </div>

      {/* Footer bottom */}
      <div className="footer-bottom">
        <h2>Designed and completed by Vu Ha, Pharmaceutical website design</h2>
        <p>
          This website is based on learning, the content of this website is for learning purposes only
        </p>
      </div>
    </div>
  );
};

export default PharmacyFooter;
