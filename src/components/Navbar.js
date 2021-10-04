import React from 'react'
import  styled  from 'styled-components';
import { Link } from 'react-router-dom';

function Navbar() {
    return (
        <Nav>
            <div className="logo-con">
                <h3>PIZZA HUB</h3>
            </div>
            <div className="links">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="about">About</Link>
                    </li>
                    <li>
                        <Link to="menu">Services</Link>

                    </li>
                    <li>
                        <Link to="contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className="button-con">
                <button className="sign-in">SIGN IN</button>
            </div>
            
        </Nav>
    )
}

const Nav = styled.nav`
    display: flex;
    background: transparent;
    justify-content: space-between;
    padding: 1.5rem;

    .logo-con {
        margin-left: 7rem;
        transition: all 0.5s ease-in-out;
        h3 {
             color: #de523a;
             font-size: 35px;
             font-weight: 700;
             cursor: pointer;
             
             &:hover {
                color: #ffc500;
                transition: 0.2s ease-out;
            }
        }

        @media screen and (max-width: 1100px) {
            margin-left: 3rem;
        }
    }

    .links {
       
        ul {
            display: flex;
            justify-content: space-between;
            

            li {
                margin: 0.5rem 3rem;

                a {
                    color: #fff;
                    font-size: 20px;
                    position: relative;

                    &:hover {
                       
                        font-weight: bold;
                    }

                    &:focus {
                        color: #de523a;
                        font-weight: bold;
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
        }
    

        @media screen and (max-width: 1100px) {
            display: none;
        }
    }

    .button-con {
        margin-right: 7rem;
        transition: all 0.5s ease-in-out;
        
        .sign-in {
            margin-top: 0.1rem;
            padding: 0.5rem 3rem;
            border-radius: 7px;
            background-color: #de523a;
            color: white;
            border: none;
            font-size: 18px;
            font-weight: 400;
            box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);

            &:hover {
                background-color: #ffc500;
                transition: 0.2s ease-out;
                color: #000;
                border: none;
                font-weight: 400;
            }
            
        }
        @media screen and (max-width: 1100px) {
            margin-right: 3rem;
        }
    }

   
`;

export default Navbar
