import React from 'react'
import  styled  from 'styled-components';
import FeaturePic from '../images/featured3.jpg';
import { Fade } from 'react-reveal'

function Feature() {
    return (
    
        <FeatureContainer>
            <Fade right >
                <h1>Pizza of the Day</h1>
                <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
            <FeatureButton>Order Now</FeatureButton>
            </Fade>
        </FeatureContainer>
    
    )
}

const FeatureContainer = styled.div`
    background: linear-gradient(to right, rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.1)),
    url(${FeaturePic});
    height: 100vh;
    max-height: 500px;
    background-position: center;
    background-size: cover;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: #fff;
    text-align: center;
    padding: 0 1rem;
    margin-top: 2rem;
    margin-bottom: 2rem;
    

    h1 {
        font-size: clamp(3rem, 5vw, 5rem);
    }

    p {
        margin-bottom: 1rem;
        font-size: clamp(1rem, 3vw, 2rem);
    }
    `;

const FeatureButton = styled.button`
    font-size: 1.4rem;
    padding: 0.6rem 3rem;
    border: none;
    background: #ffc500;
    color: #000;
    transition: 0.2s ease-out;
    border-radius: 5px;

    &:hover {
        color: #fff;
        background: #e31837;
        transition: 0.2s ease-out;
        cursor: pointer;
    }
`;

export default Feature
