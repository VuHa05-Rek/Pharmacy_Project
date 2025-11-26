// 'use client';
// import React from 'react';
// import { StaticImageData } from 'next/image';
// import styles from './new-product.module.css';
// import { ProductContent } from '../product-content/product-content';
// import Medicine from '../../assets/medicine.png';

// interface Product {
//   id: number;
//   image: StaticImageData;
//   title: string;
//   price: string;
// }

// const Product: Product[] = [
//   { id: 1, image: Medicine, title: 'Vitamin C', price: '30.000đ' },
//   { id: 1, image: Medicine, title: 'Vitamin D', price: '40.000đ' },
//   { id: 1, image: Medicine, title: 'Vitamin E', price: '10.000đ' },
//   { id: 1, image: Medicine, title: 'Vitamin B', price: '80.000đ' },
//   { id: 1, image: Medicine, title: 'Paradol', price: '15.000đ' },
//   { id: 1, image: Medicine, title: 'Vitamin B1', price: '15.000đ' },
// ];

// const ProductNew = React.memo(() => {
//   return (
//     <section className={styles.productNewContainer}>
//       <div className={styles.productNewContainer}>
//         <span role="img" aria-label="fire">
//           🔥
//         </span>
//         New Product
//       </div>
//       <div className={styles.productList}>
//         {Product.map((product) => (
//           <div key={`product-${product.id}`} className={styles.productCard}>
//             <ProductContent image={product.image} title={product.title} price={product.price} />
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// });

// ProductNew.displayName = 'ProductNew';
// export default ProductNew;

'use client';

import React from 'react';
import Link from 'next/link';
import styles from './new-product.module.css';
import { products } from '@/app/pharmacy/products/data/products';
import { ProductContent } from '../product-content/product-content';

const ProductNew = React.memo(() => {
  // 1. Lọc Dữ liệu: Chỉ lấy các sản phẩm có category là 'new-product'
  // Giả định bạn đã thêm 'category' vào interface và gán giá trị trong products.ts
  const newProducts = products.filter((product) => product.category === 'new-product');

  // HOẶC: Nếu bạn chưa kịp thêm trường 'category', bạn có thể dùng cách cắt mảng tạm thời
  // const newProducts = products.slice(6); // Lấy từ sản phẩm thứ 7 trở đi (index 6)

  return (
    <section className={styles.productNewContainer}>
      {/* 2. Sửa Tiêu đề và 3. Thay đổi Icon */}
      <div className={styles.productNewTitle}>
        <span role="img" aria-label="new-arrival">
          ✨ {/* Đổi icon từ 🔥 sang ✨ */}
        </span>
        New Product {/* Sửa văn bản tiêu đề */}
      </div>

      {/* Danh sách sản phẩm mới */}
      <div className={styles.productList}>
        {newProducts.map((product) => (
          <Link
            key={product.slug}
            href={`/pharmacy/products/${product.slug}`}
            className={styles.productCard}
          >
            <ProductContent image={product.image} title={product.title} price={product.price} />
          </Link>
        ))}
      </div>
    </section>
  );
});

ProductNew.displayName = 'ProductNew';
export default ProductNew;
