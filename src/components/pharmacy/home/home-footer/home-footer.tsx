import React from 'react'
import './home-footer.css'

import Image from 'next/image';
import Healing from '../../assets/healing.png'
import Radio from '../../assets/radio.png'

export function FooterHome (){
    return (
        <div className="container-footer-home">
            <div className="purchase-frame">
                <div className="way-to-buy">
                    <div className="way-header">
                        <p>EASY SHOPPING AT HOANGHA</p>
                    </div>

                    <div className="way-content">
                        <div className="way-first">
                        <Image src={Healing} alt="healing" width={70} height={70}/>
                        <p>Buy directly at the store</p>
                        </div>

                        <div className="divider"></div>

                        <div className="way-second">
                        <Image src={Radio} alt="radio" width={70} height={70}/>
                        <p>Select and buy products immediately at the pharmacy's website</p>
                        </div>
                    </div>
                    </div>
                        <div className="footer-bottom">
                            <h2>Designed and completed by Vu Ha, Pharmaceutical website design</h2>
                            <p>
                                This website is based on learning, the content of this website is for learning purposes only
                            </p>
                        </div>
            </div>
        </div>
    );
}
export default FooterHome;
