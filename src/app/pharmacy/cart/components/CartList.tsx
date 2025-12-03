export default function CartList({ next }: { next: () => void }) {
  return (
    <div>
      <h2>Giỏ hàng</h2>

      {/* Hiển thị list items */}

      <button onClick={next}>Tiếp tục</button>
    </div>
  );
}
