'use client';
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './Sidebar.css';

const Sidebar = () => {
  const pathname = usePathname(); // Lấy đường dẫn hiện tại

  const links = [
    { href: '/pharmacy/introduce/pages/introduce', label: 'Introduce Pharmacy' },
    { href: '/pharmacy/introduce/pages/buying-guide', label: 'Online shopping guide' },
    { href: '/pharmacy/introduce/pages/shipping', label: 'Delivery policy' },
    { href: '/pharmacy/introduce/pages/payment', label: 'Payment policy' },
    { href: '/pharmacy/introduce/pages/warranty', label: 'Warranty and return policy' },
    { href: '/pharmacy/introduce/pages/privacy', label: 'Privacy policy' },
    { href: '/pharmacy/introduce/pages/membership-points', label: 'Membership points policy' },
  ];

  return (
    <aside className="Sidebar">
      <h3>All posts</h3>
      <ul>
        {links.map(({ href, label }) => (
          <li key={href}>
            <Link 
              href={href} 
              className={pathname === href ? 'active' : ''}
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default Sidebar;
