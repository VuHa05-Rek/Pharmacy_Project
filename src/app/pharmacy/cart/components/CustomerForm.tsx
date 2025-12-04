export default function CustomerForm({ next, back }) {
  return (
    <div>
      <h2>Thông tin khách hàng</h2>

      <form>
        <input placeholder="Tên khách hàng" />
        <input placeholder="Số điện thoại" />
        <input placeholder="Địa chỉ" />
      </form>

      <button onClick={back}>Quay lại</button>
      <button onClick={next}>Tiếp tục</button>
    </div>
  );
}
