'use client';

import React from 'react';
import Sidebar from './sidebar/Sidebar';
import Header from '../common/header/header';
import Footer from '../common/footer/footer';
import './layout.css'; // Nếu bạn có file css riêng

export default function IntroduceLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="content-layout">
      <Header /> {/* Header cố định */}
      <div className="main-layout">
        <Sidebar /> {/* Sidebar bên trái */}
        <main className="content">{children}</main> {/* Vùng hiển thị nội dung */}
      </div>
      <Footer /> {/* Footer cố định */}
    </div>
  );
}
