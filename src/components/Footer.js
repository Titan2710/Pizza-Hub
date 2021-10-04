import React from 'react'
import styled  from 'styled-components';
import {FaFacebook } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'
import { Fade } from 'react-reveal';

function Footer() {
    return (
        
            <FooterStyled>
                <Fade bottom>
            <div className="company">
                <div className="heading1"><h1>Company</h1></div>
                <ul>
                    <li>About us</li>
                    <li>Our Services</li>
                    <li>Privacy Policy</li>
                    <li>Affiliate-Programs</li>
                </ul>
            </div>
            <div className="get-help">
            <div className="heading2"><h1>Get Help</h1></div>
                <ul>
                    <li>FAQ</li>
                    <li>Delivery</li>
                    <li>Returns</li>
                    <li>Order Status</li>
                    <li>Payment Options</li>
                </ul>
            </div>
            <div className="online-order">
            <div className="heading3"><h1>Online Order</h1></div>
                <ul>
                    <li>Watch</li>
                    <li>Packings</li>
                    <li>Packages</li>
                    <li>Bonus</li>
                </ul>
            </div>
            <div className="follow">
            <div className="heading4"><h1>Follow Us</h1></div>
            <div className="social">
                        <div className="fb">
                            <FaFacebook />
                        </div>
                        <div className="insta">
                            <FaInstagram />
                        </div>
                        <div className="twit">
                            <FaTwitter />
                        </div>
                    </div>
            </div> 
            </Fade>
        </FooterStyled> 
    )
}

const FooterStyled = styled.footer`
    background-color: #24262b;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    padding-left: 5rem;
    grid-gap: 0.1rem;
    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(2, 1fr);
    }

    .heading1, .heading2, .heading3, .heading4 {
        font-size: 16px;
        h1 {
            color: #fff;
            margin-top: 2rem;
            padding-left: 2rem;
            
            @media screen and (max-width: 700px) {
                padding-left: 2rem;
                text-align: left;
        }
        &:after {
            content: '';
            position: absolute;
            left: 50%;
            bottom: 0;
            transform: translateX(-50%) scaleX(0);
            -webkit-transform: translateX(-50%) scaleX(0);
            transform-origin: 50% 50%;
            width: 100%;
            height: 3px;
            background-color: #de523a;
            -webkit-transition: transform 250ms;
            transition: transform 250ms;
        }
    
        &:hover:after {
            transform: translateX(-50%) scaleX(1);
            -webkit-transform: translateX(-50%) scaleX(1);
        }
        }
        
        
    } 
    

    .social {
        font-size: 30px;
        display: flex;
        justify-content: left;
        padding: 1rem;
        .fb, .insta, .twit {
            margin: 0.6rem;
        }

    
    }

    ul {
        padding: 2rem;
        li {
        color: #bbbbbb;
        padding: 0.3rem;
        font-size: 20px;
        cursor: pointer;
        transition: all 0.2s ease-in-out;
        &:hover {
            color: white;
            font-weight: 500;
            padding-left: 1rem;
        }
    }
    @media screen and (max-width: 700px) {
        text-align: left;
    }
    }
`;

export default Footer
