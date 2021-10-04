import React from 'react'
import styled  from 'styled-components';

function Card({img, alt, desc, name, price, button}) {
    return (
        <CardStyled>
            <div className="card">
                <img src={img} alt={alt} />
                <div className="product-info">
                    <h1 className="name">{name}</h1>
                    <p className="desc">{desc}</p>
                    <h2>{price}</h2>
                    <button>{button}</button>
                </div>
            </div>
            
        </CardStyled>
    )
}

const CardStyled = styled.div`
    margin: 1rem;
    padding: 1rem;
    background-color: white;
    color: #000;
    border-radius: 10px;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    .card {
        margin: 0 2rem;
        line-height: 1.4;
        width: 300px;
        img {
            height: 300px;
            min-width: 300px;
            max-width: 100%;
            margin-top: 0.5rem;
            box-shadow: 8px 8px #fdc500;
        }
    }

    .product-info {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 1rem;
        text-align: center;
    }
    .name {
       color: #de523a;
        cursor: pointer;

       &:hover {
        color: #ffc500;
        transition: 0.2s ease-out;
    }
    }
    h2 {
        margin-bottom: 1rem;
        font-size: 2rem;
    }

    .desc {
         margin-bottom: 1rem;
         font-size: 1.5rem;
    }


    button {
        font-size: 1.4rem;
        padding: 1rem 4rem;
        border: none;
        border-radius: 10px;
        background: #e31837;
        color: #fff;
        transition: 0.2 ease-out;
        &:hover {
            background: #ffc500;
            transition: 0.2s ease-out;
            cursor: pointer;
            color: #000;
  }
    }
`;

export default Card
