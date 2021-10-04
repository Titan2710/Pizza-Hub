import React from 'react'
import  styled  from 'styled-components';
import ImgBg from '../images/pizza-3.jpg'
import Navbar from './Navbar';
import down from '../images/down.png'
import {Fade} from 'react-reveal';

function Hero() {
    return (
       
        <HeroStyled>
            <Fade top>
                 <Navbar/>
            </Fade>
            <Fade right>
                <div className="header-con">
                <div className="items">
                    <p>FOOD DELIVERY Available</p>
                    <h1>Enjoy the most<span> Delicious </span>
                            Food in your healthy life
                    </h1>
                    <div className="button-con">
                        <button>Order Now</button>
                    </div>
                    
                </div>
            </div>
            </Fade>
        </HeroStyled>
        
    )
}

const HeroStyled = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${ImgBg});
    height: 100vh;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    
    .header-con {
        color: white;
        height: calc(100vh - 80px);
        max-height: 100%;
        padding: 0rem calc((100vw - 1300px) / 2);

        .items {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
            height: 100vh;
            max-height: 100%;
            padding: 0 4rem;
            width: 650px;
            color: #fff;
            text-transform: uppercase;
            line-height: 1;
            font-weight: bold;

            @media screen and (max-width: 650px) {
                width: 100%;
              }

            h1 {
                font-size: clamp(2.5rem, 10vw, 5rem);
                margin-bottom: 1rem;
                box-shadow: 3px 5px #e9ba23;
                letter-spacing: 3px;
                span {
                    color: #de523a;

                    &:hover {
                        color: #ffc500;
                        transition: 0.2s ease-out;
                    }
                }
            }
            p {
                font-size: clamp(2rem, 2.5vw, 3rem);
                margin-bottom: 2rem;
            }
        }
    }

    .button-con  {
        button {
            font-size: 1.4rem;
            padding: 1rem 4rem;
            border: none;
            background: #de523a;
            color: #fff;
            transition: 0.2s ease-out;
            border-radius: 10px;
            cursor: pointer;
            box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

            &:hover {
                background: #ffc500;
                transition: 0.2s ease-out;
                cursor: pointer;
                color: #000;
            }
        }
        }
        .menu-btn {
            position: absolute;
            max-width: 20px;
            max-height: 20px;
            top: 710px;
            left: 46%;
            justify-content: center;
            align-items: center;
            transition: 0.2s ease-out;
    
            button {
                padding: 2px 40px;
                border-radius: 8px;
                border: none;
                background-color: #e9ba23;
                transition: 0.2s ease-out;
                box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
                a {
                    font-size: 20px;
                    font-weight: 500;
                    color: #000;
                }

                img {
                    max-height: 20px;
                    max-width: 20px;
            }
                &:hover {
                    background-color: #de523a;
                   
                }
            }

            &:hover {
                top: 700px;
                
            }
            
        }
`;

export default Hero
