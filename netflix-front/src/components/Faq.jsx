import React, { useState } from "react";
import styled from "styled-components";
import { FaPlus, FaTimes } from "react-icons/fa";

export default function Faq({ question, answer }) {
  const [showAnswer, setShowAnswer] = useState(false);

  return (
    <FaqContainer>
      <Question onClick={() => setShowAnswer(!showAnswer)}>
        {question}
        <IconContainer>
          {showAnswer ? <FaTimes size={25} /> : <FaPlus size={25} />}
        </IconContainer>
      </Question>
      {showAnswer && (
        <AnswerContainer>
          {answer.split("\n\n").map((line, index) => (
            <React.Fragment key={index}>
              <p>{line}</p>
              {index !== answer.split("\n\n").length - 1 && <br />}
            </React.Fragment>
          ))}
        </AnswerContainer>
      )}
    </FaqContainer>
  );
}

const FaqContainer = styled.div`
  max-width: 100%;
  margin: 0 auto;
  margin-bottom: 0.5rem;
  p {
    font-size: 1.5rem;
  }
`;

const AnswerContainer = styled.div`
  margin-top: 0.3rem;
  padding: 1rem;
  background-color: rgba(19, 33, 68, 1);
`;

const Question = styled.h3`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 2.4rem;
  font-weight: 400;
  color: #fff;
  cursor: pointer;
  padding: 1rem;
  background-color: rgba(19, 33, 68, 1);
  transition: all 0.2s ease-in-out;

  &:hover {
    background-color: #1d336b;
  }
`;

const IconContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 1rem;
  color: #fff;
`;
