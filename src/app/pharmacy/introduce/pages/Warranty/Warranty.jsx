import react from 'react';
import './Warranty.css';
const Warranty =() => {
    return(
        <div className='warranty'>
            <h1>Return and Warranty Policy</h1>
            <h2>I. Product return policy</h2>
            <p>We accept product returns within 7 days from the date of purchase, in the following cases:</p>
            <ul>
                <li>Manufacturer's error: The product is defective, damaged or not of the declared quality.</li>
                <li>Damage during transportation: The product is broken, dented, or not intact when it reaches the customer.</li>
                <li>Wrong product compared to the order: Wrong product type, wrong quantity or wrong model ordered.</li>
            </ul>
            <p>Return conditions:</p>
            <ul>
                <li>The product is still in its original packaging, sealed and unused.</li>
                <li>Customers need to provide a purchase invoice or electronic order confirmation information.</li>
                <li>This policy does not apply to specific products such as prescription drugs, refrigerated products, or products that have been opened.</li>
            </ul>
            <h2>Warranty policy</h2>
            <ul>
                <li>For medical equipment: Medical equipment (blood pressure monitors, nebulizers, etc.) will be warranted according to the manufacturer's policy. The specific warranty period and conditions will be clearly stated on the warranty card attached to the product.</li>
                <li>Technical support: If you have any problems during use, please contact hotline 1800 29YY for timely support from our team of pharmacists and technicians.</li>
            </ul>
        </div>
    );
}
export default Warranty;