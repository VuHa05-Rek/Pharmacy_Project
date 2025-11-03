// export default function IntroducePage() {
//   return (
//     <div style={{ padding: '2rem' }}>
//       <h1>Introduce Page</h1>
//       <p>Welcome to HoangHa Pharmacy introduction section.</p>
//     </div>
//   );
// }
'use client';
import React from 'react';
import Sidebar from '../introduce/sidebar/Sidebar';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";

import './layout/ContentLayout.css';



const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="content-layout">
      <Header /> {/* Header cố định */}
      <div className="main-layout">
        <Sidebar /> {/* Sidebar bên trái */}
        <main className="content">
          {children} {/* Đây là nơi render nội dung từng trang */}
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default ContentLayout;
