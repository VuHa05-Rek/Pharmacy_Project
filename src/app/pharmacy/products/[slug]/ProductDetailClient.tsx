'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Header from '../../common/header/header';
import Footer from '../../common/footer/footer';
import styles from './product-detail.module.css'; // Đảm bảo CSS tồn tại
import { OtherProduct } from '../other-product/other-product'; // Đảm bảo import này đúng
// SỬA LỖI IMPORT: Đổi tên import thành CommentSection và đảm bảo đường dẫn đúng
import CommentSection from '../[slug]/comment-section/CommentSection'; 

// Giả định product có kiểu dữ liệu phù hợp (ít nhất là slug hoặc id)
interface ProductDetailProps {
    product: {
        id: number;
        slug: string; // Quan trọng: Cần có slug để truyền xuống CommentSection
        image: any; 
        title: string;
        price: string;
        manufacturer: string;
        placeOfManufacture: string;
        uses?: string;
        outstanding?: string;
    };
}

export default function ProductDetailClient({ product }: ProductDetailProps) {
    const [quantity, setQuantity] = useState(1);
    const handleIncrease = () => setQuantity((q) => Math.min(q + 1, 99));
    const handleDecrease = () => setQuantity((q) => Math.max(q - 1, 1));

    // Lấy slug an toàn: ưu tiên product.slug, nếu không có thì dùng id
    const productSlug = product.slug || product.id.toString(); 

    return (
        <div className={styles.container}>
            <Header />
            <div className={styles.container_header}>
                <div className={styles.imageSection}>
                    <Image
                        src={product.image}
                        alt={product.title}
                        width={300}
                        height={300}
                        className={styles.image}
                        priority={false}
                    />
                </div>

                <div className={styles.infoSection}>
                    <h1>{product.title}</h1>
                    <div className={styles.titlePrice}>
                        <p className={styles.price}>{product.price}</p>
                    </div>
                    
                    <div className={styles.infoCommon}>
                        <li className={styles.manufacturer}><strong>Manufacturer: </strong>{product.manufacturer}</li>
                        <li className={styles.placeOfManufacture}><strong>Place Of Manufacture: </strong>{product.placeOfManufacture}</li>
                        <li className={styles.uses}><strong>Uses: </strong>{product.uses ?? product.uses}</li>
                    </div>

                    <div className={styles.quantityContainer}>
                        <div className={styles.select}>
                            <p className={styles.selectLabel}>Chọn số lượng</p> {/* Đổi từ Select Quantity sang tiếng Việt */}
                        </div>
                        <div className={styles.quantityInput}>
                            <button type="button" className={styles.quantityBtn} onClick={handleDecrease}>-</button>
                            <input type="number" className={styles.quantityNumber} value={quantity} readOnly />
                            <button type="button" className={styles.quantityBtn} onClick={handleIncrease}>+</button>
                        </div>
                    </div>
                    <div className={styles.buy}>
                        <button className={styles.buychoose}> SELECT TO BUY</button>
                        <button className={styles.buyButton} >ADD TO CART</button>
                    </div>
                </div>
            </div>

            <div className={styles.container_footer}>
                <div className={styles.container_shadow}>
                    <h1>{product.title}</h1>
                    <div className={styles.image_outstanding}>
                        <Image
                            src={product.image}
                            alt={product.title}
                            width={500}
                            height={500}
                            className={styles.image}
                            priority={false}
                        />
                    </div>
                    <div className={styles.outstanding_features_container}>
                        <h2>Outstanding Features</h2>
                        <p>{product.outstanding ?? 'Không có thông tin'}</p>
                    </div>
                </div>
            </div>
            <div className={styles.otherProductContainer}>
                <p className={styles.titleOtherProduct}>Other Product</p>
                <OtherProduct />
            </div>   
            {/* SỬA LỖI: Gọi CommentSection và truyền prop slug */}
            <CommentSection slug={productSlug} />    
            <Footer />
            
          
        </div>
    );
}