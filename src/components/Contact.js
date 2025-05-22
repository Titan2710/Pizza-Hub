import React from 'react'
import  styled  from 'styled-components';
import gif from '../images/menu.gif'
import {Fade} from 'react-reveal';
import {FaFacebook } from 'react-icons/fa';
import {FaInstagram} from 'react-icons/fa'
import {FaTwitter} from 'react-icons/fa'

function Contact() {
    return (
        <ContactStyled>
            <Fade left>
              <div
                className="left-side"
                style={{
                  overflow: 'hidden',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                <img
                  src={gif}
                  alt="gif"
                  style={{
                    maxWidth: '100%',
                    height: 'auto',
                    display: 'block',
                    objectFit: 'contain',
                  }}
                />
              </div>
            </Fade>
            <Fade right>
                <div className="right-side">
                    <div className="heading-con">
                        <h1 className="heading">Contact Us</h1>
                    </div>
                    <h2>--- Hotlines ---</h2>
                    <div className="num">
                        <ul>
                            <li>000 111 222</li>
                            <li>333 444 555</li>
                            <li>666 777 888</li>
                            <li>999 000 111</li>
                            <li>222 333 444</li>
                        </ul>
                    </div>
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
            
            
            
        </ContactStyled>
    )
}

const ContactStyled = styled.section`
    background-color: #fcfef4;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    justify-content: center;
    align-items: center;
    padding: 3rem;
    @media screen and (max-width: 1100px){
        grid-template-columns: repeat(1, 1fr);
        .heading-con {
            margin-bottom : 1rem;
        }
    }

    .right-side {
        margin-top: 2rem;
        text-align: center;

    h2 {
        margin-bottom: 1rem;
    }
    .social {
        font-size: 30px;
        display: flex;
        justify-content: center;
        padding: 1rem;
        .fb, .insta, .twit {
            margin: 1rem;
        }

    
    }
        .heading-con {
            .heading {
                font-size: 40px;
            }
        }
        .num {
            ul li {
                padding-right: 1rem;
                list-style: inside;
            }
        }
    }
`;

export default Contact
