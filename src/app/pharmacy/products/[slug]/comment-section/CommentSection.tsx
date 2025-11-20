'use client';

import { useState } from 'react';
import styles from './CommentSection.module.css'; // nếu bạn có CSS module riêng

interface Comment {
  id: number;
  slug: string;
  gender: 'Men' | 'Women';
  name: string;
  phone: string;
  content: string;
  createdAt: string;
}


// Đây là form mẫu để text và lưu trong RAM viết bằng Route Next JS còn thiếu Backend 
export default function CommentSection({ slug }: { slug: string }) {
  const [gender, setGender] = useState<'Men' | 'Women'>('Men');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [content, setContent] = useState('');

  const [comments, setComments] = useState<Comment[]>([]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!name || !phone || !content) {
      alert('Please enter complete information!');
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
      <div className={styles.commentShadow}>
      <h2 className={styles.title}>COMMENT</h2>

      {/* FORM NHẬP BÌNH LUẬN */}
      <form className={styles.form} onSubmit={handleSubmit}>
        
        {/* Giới tính */}

        <div className={styles.totalInformation}>
        <div className={styles.genderGroup}>
          <label>
            <input
              type="radio"
              checked={gender === 'Men'}
              onChange={() => setGender('Men')}
            />
            Men
          </label>

          <label>
            <input
              type="radio"
              checked={gender === 'Women'}
              onChange={() => setGender('Women')}
            />
            Women
          </label>
        </div>

        {/* Họ tên & SĐT */}
        <div className={styles.inputRow}>
          <input
            type="text"
            placeholder="Full name *"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />

          <input
            type="text"
            placeholder="Phone"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        </div>

        {/* Nội dung bình luận */}
        <textarea
          placeholder="Enter comment..."
          value={content}
          onChange={(e) => setContent(e.target.value)}
        ></textarea>

        <button type="submit" className={styles.submitBtn}>
          Send Comment
        </button>
      </form>

      {/* HIỂN THỊ DANH SÁCH BÌNH LUẬN */}
      <div className={styles.commentList}>
        {comments.length === 0 && (
          <p className={styles.noComment}>No comments yet.</p>
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
    </div>
  );
}
