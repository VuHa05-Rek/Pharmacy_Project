'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import './header.css';


// Import hình ảnh
import plus from '../../assets/plus.png';
import documents from '../../assets/documents.png';
import chat from '../../assets/chat.png';
import freeshipping from '../../assets/free-shipping.png';
import guarantee from '../../assets/guarantee.png';
import shoppingcart from '../../assets/shopping-cart.png';
import user from '../../assets/user.png';
import search from '../../assets/search.png';
import downarrow from '../../assets/down-arrow.png';
import { useRouter } from 'next/navigation';




export function PharmacyHeader() {
  const router = useRouter();
  const navLinks = ['Home', 'Introduce', 'Policy', 'Support'];
  const categories = [
    'Medicine',
    'Functional Food',
    'Pharmaceuticals - Cosmetics',
    'Medical Equipment',
  ] as const;

  type Category = typeof categories[number];

  const productsData: Record<Category, string[]> = {
    Medicine: ['Paracetamol', 'Ibuprofen', 'Amoxicillin'],
    'Functional Food': ['Vitamins', 'Minerals', 'Probiotics'],
    'Pharmaceuticals - Cosmetics': ['Skincare', 'Haircare', 'Makeup'],
    'Medical Equipment': ['Blood Pressure Monitors', 'Thermometers', 'Glucose Meters'],
  };

  const [selectedCategory, setSelectedCategory] = useState<Category | null>(null);

  const handleClick = (cate: Category) => {
    setSelectedCategory((prev) => (prev === cate ? null : cate));
    // Nếu click cate thì ẩn đi, ngươc lại thì hiện sản phẩm ra
  };

  return (
    
    <header className="Header">
      {/* Thanh trên cùng */}
      <div className="top-bar">
        <p>ACCUMULATED PURCHASES - GET MANY DISCOUNTS IMMEDIATELY</p>
        <div className="bottom-bar">
          <div className="register-membership">Register for membership</div>
          <Link href="#">Here!</Link>
        </div>
      </div>

      {/* Header chính */}
      <div className="main-header">
        {/* Logo */}
        <div className="Logo">HoangHa Pharmacy</div>

        {/* Khu vực giữa */}
        <div className="center-header">
          {/* Thanh điều hướng */}
          <nav className="main-nav">
            {navLinks.map((text) => (
              <span
                key={text}
                onClick={() => {
                  if (text === 'Home') {
                    router.push('/'); // ← quay về trang chủ
                  } else if (text === 'Introduce') {
                    router.push('/introduce');
                  } else if (text === 'Policy') {
                    router.push('/policy');
                  } else if (text === 'Support') {
                    router.push('/support');
                  }
                }}
                className="nav-item"
                style={{ cursor: 'pointer' }}
                >
                {text}
              </span>
              ))}
            </nav>

          {/* Ô tìm kiếm */}
          <div className="search-box">
            <input type="text" placeholder="Search for medicines..." />
            <img src={search.src} alt="search-icon" />
          </div>
        </div>

        {/* Khu vực bên phải */}
        <div className="header-right">
          {/* Hàng trên */}
          <div className="header-top">
            <span className="Hotline">Hotline: 1800 10YY</span>
            <div className="login-section">
              <button className="login-introduce">Login</button>
              <img src={user.src} alt="user-icon" />
            </div>
          </div>

          {/* Hàng dưới */}
          <div className="header-bottom">
            <button className="history-bought">
              <img src={documents.src} alt="document-icon" />
              Purchase History
            </button>
            <button className="shopping-cart-introduce">
              <img src={shoppingcart.src} alt="shoppingcart-icon" />
              Shopping Cart
            </button>
          </div>
        </div>
      </div>

      {/* Thanh danh mục */}
      <div className="category-nav">
        <ul>
          {categories.map((cate) => (
            <li key={cate} onClick={() => handleClick(cate)} className ="cursor-pointer">
              <Link href="#">{cate}</Link>
              <div className="down-arrow-icon">
                <img src={downarrow.src} alt="down-arrow-icon"/>
              </div>  
              {selectedCategory === cate && (
                <ul className="product-list">
                  {productsData[cate].map((product) => (
                    <li key={product}><Link href="#">{product}</Link></li>
                  ))}
                </ul>
              )}           
            </li>
          ))}
        </ul>
      </div>
    </header> 
  );
}

export default PharmacyHeader;
