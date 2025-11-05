'use client';
import React from 'react';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import './support.css';

export default function Support (){
    return (
        <div className="container-support">
            <Header />
            <div className="content-support">
                <h1>📞 Customer Support Center</h1>
                <div className="support-part-1">
                    <h2>I. Introduction & Navigation</h2>
                    <p>- We're here to help!</p>
                    <p>- Find answers to your most common questions here. If you need further assistance, please contact us via the channels below.</p>

                </div>
                <div className="support-part-2">
                    <h2>1. 🛒 Ordering and Payment</h2>
                    <div className="faq-item">
                        <div className="question">How do I place an order on the website?</div>
                        <div className="answer">To place an order, simply browse our product catalog, add items to your cart, and proceed to checkout.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">What payment methods are accepted (COD, Credit Card, Bank Transfer, etc.)?</div>
                        <div className="answer">We accept various payment methods including Cash on Delivery (COD), Credit Card, and Bank Transfer. Please choose your preferred method at checkout.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">What should I do if the online payment fails?</div>
                        <div className="answer">If your online payment fails, please try the following steps: 1. Check your internet connection. 2. Ensure that your payment information is correct. 3. Try using a different payment method. If the issue persists, please contact our support team for assistance.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">How to use a Coupon/Voucher.</div>
                        <div className="answer">To use a Coupon/Voucher, simply enter the code into the "Coupon Code" box on the checkout page and click "Apply". If the code is valid, the discount will be applied to your order.</div>
                    </div>

                    <h2>2. 🚚 Shipping and Delivery</h2>
                    <div className="faq-item">
                        <div className="question">What is the standard delivery time?</div>
                        <div className="answer">The standard delivery time is 3-5 business days. You will receive a tracking number via email once your order has shipped.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">How are shipping costs calculated?</div>
                        <div className="answer">Shipping costs are calculated based on the weight and dimensions of your order, as well as your location. You can view the estimated shipping costs at checkout before completing your purchase.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">How do I track my order?</div>
                        <div className="answer">You can track your order using the tracking number provided in the shipping confirmation email. Simply enter the tracking number on our website to view the status of your shipment.</div>
                    </div>

                    <h2>3. 📦 Returns and Refunds</h2>
                    <div className="faq-item">
                        <div className="question">What are the conditions for returning/exchanging a product?</div>
                        <div className="answer">To be eligible for a return or exchange, your item must be unused and in the same condition that you received it. It must also be in the original packaging. Please keep your receipt or proof of purchase.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">Can I request a refund? How long does it take to get a refund?</div>
                        <div className="answer">Yes, you can request a refund within 30 days of receiving your order. The refund process typically takes 5-7 business days to complete after we receive your returned item.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">How do I return the product? Who will pay for the return shipping?</div>
                        <div className="answer">To return a product, please contact our customer support team for assistance. They will guide you through the return process. As for return shipping costs, they are typically the responsibility of the customer, unless the return is due to a mistake on our part (e.g., wrong item shipped).</div>
                    </div>
                    <h2>4. 📝 Account and Security</h2>
                    <div className="faq-item">
                        <div className="question">How do I register/manage my account information?</div>
                        <div className="answer">To register or manage your account information, please visit the "My Account" section on our website. From there, you can update your personal information, change your password, and view your order history.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">What should I do if I forget my password/username?</div>
                        <div className="answer">If you forget your password, you can reset it by clicking on the "Forgot Password?" link on the login page. Follow the prompts to reset your password. If you forget your username, please contact our customer support team for assistance.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">How can I check my accumulated points?</div>
                        <div className="answer">You can check your accumulated points by logging into your account and visiting the "My Account" section. Your points balance will be displayed there. If you have any questions about your points, please contact our customer support team for assistance.</div>
                    </div>
                    <h2>5. 🛠️ Warranty and Product Quality</h2>
                    <div className="faq-item">
                        <div className="question">How long is the warranty period for this product?</div>
                        <div className="answer">The warranty period for this product is typically one year from the date of purchase. Please keep your receipt as proof of purchase to facilitate any warranty claims.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">What do I need to do to claim a warranty?</div>
                        <div className="answer">To claim a warranty, please contact our customer support team with your order details and a description of the issue. They will guide you through the warranty claim process.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">What are the cases where the warranty is not applicable?</div>
                        <div className="answer">The warranty is not applicable in the following cases: 1) Accidental damage, 2) Misuse or abuse of the product, 3) Normal wear and tear, 4) Products not purchased from authorized retailers. If you have any questions about your warranty coverage, please contact our customer support team for assistance.</div>
                    </div>
                    <div className="faq-item">
                        <div className="question">Details about the material/origin of the product.</div>
                        <div className="answer">Our products are made from high-quality materials sourced from reputable suppliers. We ensure that all materials meet strict safety and quality standards. If you have specific questions about the materials used in a particular product, please contact our customer support team for assistance.</div>
                    </div>
                </div>
            </div>
        </div>
    )
}