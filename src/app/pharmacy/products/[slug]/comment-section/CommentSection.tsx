'use client';

import { useState } from 'react';
import styles from './comment.module.css'; // nếu bạn có CSS module riêng

interface Comment {
  id: number;
  slug: string;
  gender: 'Anh' | 'Chị';
  name: string;
  phone: string;
  content: string;
  createdAt: string;
}

export default function CommentSection({ slug }: { slug: string }) {
  const [gender, setGender] = useState<'Anh' | 'Chị'>('Anh');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !content) {
      alert('Vui lòng nhập đầy đủ thông tin!');
      return;
    }

    const newComment: Comment = {
      id: Date.now(),
      slug,
      gender,
      name,
      phone,
      content,
      createdAt: new Date().toLocaleString(),
    };

    setComments((prev) => [...prev, newComment]);

    // Reset form
    setName('');
    setPhone('');
    setContent('');
  };

  return (
    <div className={styles.commentContainer}>
      <h2 className={styles.title}>BÌNH LUẬN</h2>

      {/* 🔥 FORM NHẬP BÌNH LUẬN */}
      <form className={styles.form} onSubmit={handleSubmit}>
        
        {/* Giới tính */}
        <div className={styles.genderGroup}>
          <label>
            <input
              type="radio"
              checked={gender === 'Anh'}
              onChange={() => setGender('Anh')}
            />
            Anh
          </label>

          <label>
            <input
              type="radio"
              checked={gender === 'Chị'}
              onChange={() => setGender('Chị')}
            />
            Chị
          </label>
        </div>

        {/* Họ tên & SĐT */}
        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="Họ và tên *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Số điện thoại"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        {/* Nội dung bình luận */}
        <textarea
          placeholder="Nhập bình luận..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit" className={styles.submitBtn}>
          Gửi bình luận
        </button>
      </form>

      {/* 🔥 HIỂN THỊ DANH SÁCH BÌNH LUẬN */}
      <div className={styles.commentList}>
        {comments.length === 0 && (
          <p className={styles.noComment}>Chưa có bình luận nào.</p>
        )}

        {comments.map((cmt) => (
          <div key={cmt.id} className={styles.commentItem}>
            <p className={styles.userName}>
              {cmt.gender} {cmt.name}
            </p>
            <p className={styles.content}>{cmt.content}</p>
            <p className={styles.time}>{cmt.createdAt}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
