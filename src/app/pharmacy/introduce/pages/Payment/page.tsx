import react from 'react';
import './Payment.css'
const Payment =() => {
    return (
        <div className="payment">
            <h1>Payment Policy</h1>
            <h2>I. Cash on delivery(COD)</h2>
            <p>You can pay directly to the delivery staff upon receiving the product. This is a safe and convenient method, applicable to all orders nationwide.</p>
            <h2>II. Bank transfer payment</h2>
            <p>If you want to pay in advance, you can use bank transfer. After placing an order, you will receive HoangHa Pharmacy's bank account information to make the transaction. The order will be confirmed and sent immediately after we receive the payment.</p>
            <h2>III. Payment via e-wallet</h2>
            <p>To save time, you can pay via popular e-wallets such as Momo, ZaloPay, Viettel Money. This method is not only fast but also often has many promotions from payment partners.</p>
        </div>
    );
}
export default Payment;