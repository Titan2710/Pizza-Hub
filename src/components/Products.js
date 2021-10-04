import React from 'react'
import  styled  from 'styled-components';
import Card from './Card';
import  productData from './data';
import { productDataTwo } from './data';
import Feature from './Feature';
import {Fade} from 'react-reveal'

function Products() {
    return (
        <ProductStyled>
            <Fade top>
                <h1>Choose your Favorite</h1>
            </Fade>
            <div className="product-con">
                {productData.map((product, index) => {
                    const {img, alt, desc, name, price, button} = product;
                    return (
                        <Fade left >
                            <Card 
                            name={name}
                            key={index}
                            img={img}
                            alt={alt}
                            desc={desc}
                            price={price}
                            button={button} 
                            />
                         </Fade>
                    )
                })}
            </div>
            
                <Feature />
                
            <Fade top>
                <h1>Sweet Treats For You</h1>
            </Fade>
            
            <div className="product-con">
                {productDataTwo.map((product, index) => {
                    const {img, alt, desc, name, price, button} = product;
                    return (
                        <Fade left >
                            <Card 
                            name={name}
                            key={index}
                            img={img}
                            alt={alt}
                            desc={desc}
                            price={price}
                            button={button} 
                            />
                         </Fade>
                    )
                })}
            </div>
        </ProductStyled>
    )
}

const ProductStyled = styled.div`
    width: 100vw;
    min-height: 100vh;
    padding: 2.2rem calc((100vw - 1300px) / 2);
    background: #000;
    color: #000;
    text-align: center;
    margin-bottom: rem;
    
    h1 {
        padding: 1rem;
        color: #fff;
    }
    
    .product-con {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin: 0 auto;
    }
`;

export default Products
