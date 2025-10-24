'use client';

import { useRouter } from 'next/navigation';


interface SeeAllButtonProps {
  href?: string;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}

export function SeeAllButton({ 
  href = '/pharmacy/products',
  onClick,
  className = '',
  children = 'See all'
}: SeeAllButtonProps) {
  const router = useRouter();

  const handleClick = () => {
    console.log('🔘 Navigating to:', href);
    onClick?.();
    router.push(href ?? '/pharmacy/products');
  };

  return (
    <button 
      type="button"
      className={`see-all-btn ${className}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}
