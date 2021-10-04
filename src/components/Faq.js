import React from 'react'
import  styled  from 'styled-components';
import questions from '../components/questions';
import Question from '../components/Question';

function Faq() {
    return (
        <FaqStyled>
            <div className="header-con">
                <h1>Frequently Asked Questions</h1>
            </div>
            <div className="questions">
                {questions.map((question, index) => {
                    const {ques, ans} = question;
                    return (
                        <Question
                        ques={ques}
                        ans={ans}
                        key={index}
                        ></Question>
                    )
                })}
            </div>
        </FaqStyled>
    )
}

const FaqStyled = styled.section`
    background-color: #000;
    font-family: "Nunito", san-serif;
    padding: 1.4rem 1rem;
    text-align: center;
    color: white;
    font-size: 25px;
    .header-con {
        margin: 1.5rem;
    }

    .questions {
        display: flex;
        flex-direction: column;
        justify-content: center;
        font-size: 25px;
        color: #000;
        padding: 2rem 10rem;
        @media screen and (max-width: 1000px) {
            padding: 2rem 5rem;
        }
    }
    
`;

export default Faq;
