import React, {useState} from 'react'
import styled  from 'styled-components';
import plus from '../images/plus.svg';
import minus from '../images/minus.svg'
import {Fade } from 'react-reveal';

function Question({ques, ans, index}) {

    const [toggle, setToggle ] = useState(false);
    const handleClick = () => {
        setToggle(!toggle);
    }

    return (
        <Fade left cascade>
            <QuestionStyled>
                <div className="ques">
                    {ques}
                    <button onClick={handleClick}>
                        { toggle ?  <img src={minus} alt="" /> : <img src={plus} alt="" /> }
                    </button>
                </div>
                {toggle && <p>{ans}</p>}
            </QuestionStyled>
        </Fade>
    )
}

const QuestionStyled = styled.div`
    background-color: white;
    padding: 1.4rem 2rem;
    font-family: "Nunito", san-serif;
    margin: 1rem 0;
    border-radius: 24px;
    text-align: left;
    box-shadow: 0px 25px 50px rgba(22, 25, 79, 0.05);
    font-weight: 550;
    transition: all .4s ease-in-out;

    .ques {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
        button {
            background: transparent;
            outline: none;
            cursor: pointer;
            border: none;
        }
    }

    p {
        
        margin-top: 1rem;
        font-size: 20px;
    }
`;

export default Question
