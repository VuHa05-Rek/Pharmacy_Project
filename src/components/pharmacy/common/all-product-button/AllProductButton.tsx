'use client';

import { useRouter } from 'next/navigation';
//import './see-all-button.css'; // Tùy chọn

interface SeeAllButtonProps {
  href?: string; // URL để chuyển đến
  onClick?: () => void; // Custom logic (nếu cần)
  className?: string; // Custom class CSS
  children?: React.ReactNode; // Custom text
}

export function SeeAllButton({ 
  href = '/pharmacy/products', // ← Default route
  onClick,
  className = '',
  children = 'See all' // ← Default text
}: SeeAllButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    console.log('🔘 See all clicked, navigating to:', href);
    
    // Nếu có custom onClick, chạy nó trước
    if (onClick) {
      onClick();
    }
    
    // Chuyển trang
    router.push(href);
  };

  return (
    <button 
      className={`see-all-btn ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
