import React from 'react'
import './Privacy.css'
const Privacy =() => {
    return (
        <div className="Privacy">
            <h1>Information Security Policy</h1>
            <p>At HoangHa Pharmacy, we are committed to protecting your personal information. Customer trust is our top priority.</p>
            <h2>I. Purpose of information collection</h2>
            <p>We only collect necessary information such as name, phone number, and email address to:</p>
            <ul>
                <li>Process and deliver your orders.</li>
                <li>Provide health advice from our team of pharmacists.</li>
                <li>Notify about promotions and special offers (if you agree to receive information).</li>
                <li>Improve service quality and customer shopping experience.</li>
            </ul>
            <h2>II. Commitment to information security</h2>
            <ul>
                <li>Do not share information: HoangHa Pharmacy is committed to not selling, renting or disclosing your personal information to any third party, except in cases required by law.</li>
                <li>Data protection: All customer information is stored on a highly secure system, ensuring absolute safety and protection against unauthorized access.</li>
            </ul>
            <h2>III. Customer rights</h2>
            <ul>
                <li>You have the right to request access, correction or deletion of your personal information at any time by contacting us via hotline or email.</li>
                <li>If you do not want to receive promotional notifications, you can easily unsubscribe.</li>
            </ul>
        </div>
    ); 
}
export default Privacy;