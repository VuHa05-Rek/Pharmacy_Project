'use client';
import React from 'react';
import Header from "../common/header/header";
import Footer from "../common/footer/footer";
import './rules-points.css';

export default function RulesPoints () {
    return (
        <div className="container-rules-points">
        <Header />
        <div className="content-rules-points">
            <h1>Loyalty & Points Program</h1>
            <div className="content-part-1">
                <h2>I. Attractive Introduction</h2>
                <p>- Loyal Customers - Accumulate Points to Redeem Offers</p>
                <p>- Special gratitude program for customers who have trusted and supported. Every transaction brings a refund value, helping you shop more economically!</p>
                <p>- 5% Cashback, Priority Purchase, Special Birthday Gift</p>
            </div>
            <div className="content-part-2">
                <h2>II. Points Accumulation Mechanism</h2>
                <table>
                    <thead>
                        <tr>
                            <th>Action/Condition</th>
                            <th>Point Accumulation</th>
                            <th>Example Illustration</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>Shopping at website/Store</td>
                            <td>10.000đ = 1 Points</td>
                            <td>Order 500,000 VND to accumulate 50 Points</td>
                        </tr>
                        <tr>
                            <td>Register New Account</td>
                            <td>50 Welcome Points</td>
                            <td>Get 50 points immediately upon account activation</td>
                        </tr>
                        <tr>
                            <td>Product Review</td>
                            <td>20 Points/Review (with pictures)</td>
                            <td>Help next 5 customers, get extra bonus points</td>
                        </tr>
                        <tr>
                            <td>Referral</td>
                            <td>100 Points when a friend makes a purchase</td>
                            <td>Friends buy successfully, both get points</td>
                        </tr>
                    </tbody>
                </table>
                <div className="note">
                    <strong>Note:</strong> 
                    <p>- Points are added to the account 24 hours after the order is successfully delivered.</p>
                    <p>- Points are valid for 24 months from the date of accumulation.</p>
                </div>
            </div>
            <div className="content-part-3">
                    <h2>III. Point Redemption Mechanism</h2>
                    <table>
                        <thead>
                            <th>Point Redemption Form</th>
                            <th>Conversion Rate</th>
                            <th>Conditions Apply</th>                          
                        </thead>
                            <tbody>
                                <tr>
                                    <td>Convert to Cash</td>
                                    <td>1 Point = 100 VND</td>
                                    <td>Applies up to 50% of order value</td>
                                </tr>
                                <tr> 
                                    <td>Redeem for Discount Code</td>
                                    <td>200 Points for 50,000 VND Voucher</td>
                                    <td>Applies to orders from 300,000 VND</td>

                                </tr>
                                <tr>
                                    <td>Redeem for Gift</td>
                                    <td>500 Points for 1 Exclusive E-Book</td>
                                    <td>Only applies to specified products</td>

                                </tr>
                            </tbody>
                        </table>
                        <div className="note-2">
                            <strong>Note:</strong> Customers need to reach a minimum of 1,000 VND to be able to redeem rewards.
                        </div>
                    </div>
                    <div className="content-part-4">
                            <h2>IV. Members</h2>
                            <table>
                                <thead>
                                    <tr>
                                        <th>Finished Member</th>
                                        <th>Conditions to achieve</th>
                                        <th>Priority Add</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Silver Member</td>
                                        <td>Accumulated spending 3 million VND</td>
                                        <td>Additional 2% lifetime discount</td>
                                    </tr>
                                    
                                    <tr>
                                        <td>Gold Member</td>
                                        <td>Accumulated spending 10 million VND</td>
                                        <td>Additional 5% discount, Birthday gift 100,000 VND</td>
                                    </tr>

                                    <tr>
                                        <td>Diamond Member</td>
                                        <td>Accumulated spending 25 million VND</td>
                                        <td>Additional 10% discount, Priority to test new products</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="content-part-5">
                            <h2>V. Terms & Conditions</h2>
                            <ul>- Scope of application: The program only applies to registered accounts, not to walk-in orders.</ul>
                            <ul>- Non-transferable: Points cannot be transferred between different accounts.</ul>
                            <ul>- Order cancellation: If the point order is canceled or returned, the accumulated points will be deducted accordingly.</ul>
                            <ul>- Right to change: We reserve the right to change, adjust or terminate this program at any time, and will notify customers in advance.</ul>
                        </div>
                    
                </div>        
        <Footer />
        </div>
    )
}