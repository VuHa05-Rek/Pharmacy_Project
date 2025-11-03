import React from 'react'
import './MembershipPoints.css'
const MembershipPoints = () =>{
    return(
        <div className="MembershipPoints">
            <h1>HoangHa Pharmacy Membership Program</h1>
            <h2>I. How to participate</h2>
            <p>Target: All customers shopping at HoangHa Pharmacy, including direct purchases at the store and online orders.</p>
            <p>Registration: You only need to provide your phone number to the cashier or fill out the membership registration form when shopping online. Your information will be kept strictly confidential.</p>
            <h2>II. Point accumulation rules</h2>
            <ul>
                <li>Point accumulation rate: For every 10,000 VND spent, you will accumulate 1 point in your membership account.</li>
                <li>How to calculate points: Points are accumulated based on the total payment value of the order after deducting other promotions (if any).</li>
                <li>Check points: You can easily check your accumulated points by providing your phone number at the counter or logging into your account on the website.</li>
            </ul>
            <h2>III. Redemption and use of points</h2>
            <p>Conversion value: 1 point is equivalent to 100 VND.</p>
            <p>How to use:</p>
            <ul>
                <li>You can use points to pay directly for the next orders.</li>
                <li>Points can be converted into discount vouchers or special gifts in member-specific promotions.</li>
                <li>Expiration date: Accumulated points are valid for 12 months from the date of issuance. Unused points will expire.</li>
            </ul>
            <h2>VI. Special member benefits</h2>
            <ul>
                <li>Birthday offers: Receive special offers during your birthday month.</li>
                <li>Exclusive events: Participate in free health consultations or customer appreciation events.</li>
                <li>Early information: Receive the earliest information about new products, promotions and exclusive offers.</li>
            </ul>
        </div>
    );
}
export default MembershipPoints;