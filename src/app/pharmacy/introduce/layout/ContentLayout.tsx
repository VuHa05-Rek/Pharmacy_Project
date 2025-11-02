import React from 'react';
import Sidebar from '../Sidebar/Sidebar';
import Header from "../../common/header/header";
import Footer from "../../common/footer/footer";

import './ContentLayout.css';
const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content-layout">
      <Header /> {/* Header cố định */}
      <div className="main-layout">
        <Sidebar /> {/* Sidebar bên trái */}
        <main className="content">
          {children} {/* ✅ Đây là nơi render nội dung từng trang */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ContentLayout;
