'use client';

import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import './header.css';
import ContentLayout from '@/app/pharmacy/introduce/layout/ContentLayout';


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
  const navLinks = ['Home', 'Introduce', 'Points Rules', 'Support'];
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

  // Theo dõi trạng thái hiện/ẩn của từng category
  const [openCategories, setOpenCategories] = useState<Set<Category>>(new Set());

  const handleClick = (cate: Category, event: React.MouseEvent) => {
    event.preventDefault(); // Ngăn chặn hành vi mặc định của thẻ a
    event.stopPropagation(); // Ngăn chặn sự kiện click lan ra ngoài
    
    setOpenCategories(prev => {
      const newSet = new Set(prev);
      if (newSet.has(cate)) {
        newSet.delete(cate); // Đóng nếu đang mở
      } else {
        newSet.add(cate); // Mở nếu đang đóng
      }
      return newSet;
    });
  };

  return (
    <header className="Header">
     
      <div className="top-bar">
        <p>ACCUMULATED PURCHASES - GET MANY DISCOUNTS IMMEDIATELY</p>
        <div className="bottom-bar">
          <div className="register-membership">Register for membership</div>
          <Link href="#">Here!</Link>
        </div>
      </div>

      {/* Header chính */}
      <div className="main-header">
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
                    router.push('/');
                  } else if (text === 'Introduce') {
                    router.push('/pharmacy/introduce');
                  } else if (text === 'Points Rules') {
                    router.push('/pharmacy/rules-points');
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
            <li 
              key={cate} 
              onClick={(e) => handleClick(cate, e)} 
              className="cursor-pointer"
            >
              <Link href="#" onClick={(e) => e.preventDefault()}>
                {cate}
              </Link>
              <div className="down-arrow-icon">
                <img src={downarrow.src} alt="down-arrow-icon"/>
              </div>  
              {openCategories.has(cate) && (
                <ul className="product-list">
                  {productsData[cate].map((product) => (
                    <li key={product}>
                      <Link href="#">{product}</Link>
                    </li>
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