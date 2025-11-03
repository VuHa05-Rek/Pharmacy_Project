import React from 'react'
import './BuyingGuide.css'

const BuyingGuide =() => {
    return (
        <div className="buying-guide">
            <h1>Online Shopping Guide</h1>
            <h2>Step 1: Search for products</h2>
            <ul>
                <li>Search by name: Enter the name of the product you want to buy in the search box at the top of the website.</li>
                <li>Search by category: Browse through our product categories (such as Medicine, Cosmetics, Dietary Supplements...) to discover suitable products.</li>
            </ul>
            <h2>Step 2: Order a product</h2>
            <ul>
                <li>After finding a product, click on the image to view detailed information.</li>
                <li>Select the desired quantity and click the "Add to Cart" button.</li>
                <li>A shopping cart window will appear. Here, you can review the selected products and continue shopping or proceed to checkout.</li>
            </ul>
            <h2>Step 3: Fill in information and pay</h2>
            <ul>
                <li>Click on the shopping cart icon and select "Checkout" to go to the information filling page.</li>
                <li>Enter the required information completely and accurately: Full name, phone number, delivery address.</li>
                <li>Choose one of our flexible payment methods: Cash on Delivery (COD), Bank Transfer, or Payment via e-wallet.</li>
                <li>If you have a discount code, enter it in the corresponding box.</li>
                <li>Finally, click "Complete Order".</li>
            </ul>
            <h2>Step 4: Confirm Order and Receive Goods</h2>
            <ul>
                <li>After completion, the system will send an order confirmation notification via email or SMS.</li>
                <li>HoangHa Pharmacy's team of pharmacists will contact you to advise and confirm your order before delivery.</li>
                <li>The product will be delivered to the address you provided as soon as possible.</li>
            </ul>
        </div>
    );
}
export default BuyingGuide;