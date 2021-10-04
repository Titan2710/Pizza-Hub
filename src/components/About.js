import React from 'react'
import  styled  from 'styled-components';
import aboutus from '../images/aboutus.jpg';
import {Fade} from 'react-reveal';

function About() {
    return (
        <AboutStyled>
            <Fade right>
                <div className="left-side">
                <div className="heading-con">
                     <h1 className="heading">About Us</h1>
                </div>
               
                <h2>
            <span>Pizza Hub</span> is the collaborative outcome of seasoned food &
            business operators who have combined their past 25 years’ 
            industry experience to create this exciting dining offer.
                </h2>
                <div className="line"></div>
                 <p></p>
            </div>
            <div className="right-side">
              
            </div>
            </Fade>
            
        </AboutStyled>
    )
}

const AboutStyled = styled.section`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${aboutus});
    background-position: center;
    background-size: cover;
    height: 50vh;
    width: 100vw;
    display: flex;
    flex-direction: column;
    padding: 3rem;
    padding-right: 10rem;
    text-align: center;
    line-height: 1.8rem;
    justify-content: center;

    @media screen and (min-width: 1100px) {
        padding-right: 20rem;
        padding-left: 20rem;
    }

    @media screen and (min-width: 1300px) {
        padding-right: 30rem;
        padding-left: 30rem;
    }

    .right-side {
       
    }

    .left-side {
        .heading-con {
            font-size: 30px;
            color: #e9ba23;
            margin-bottom: 2.5rem;
            cursor: pointer;

            .heading {

                 &:before {
                    content: '';
                    position: absolute;
                    height: 3px;
                    max-width: 140px;
                    margin-top: 45px;
                    width: 0%;
                    background-color:  white;
                    transition: all 0.5s ease-in-out;
            }
                &:hover:before {
                    width: 100%;
                }
            }   
        }

        .line {
            margin: 0.5rem;
            width: 20px;
            height: 5px;
            color: white;
            display: block;
        }

        h2 {
            font-size: 25px;
            color: #de523a;
            
        }

        p {
           color: #fff;
           font-size: 20px;
           line-height: 1.6rem;
        }
    }
`;

export default About
