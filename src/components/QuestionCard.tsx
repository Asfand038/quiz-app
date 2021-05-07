import React from "react";

import { QuestionCardLayout, ButtonWrapper } from "./QuestionCard.styles";

interface Props {
  question: string;
  answerOptions: string[];
  answerHandler: (option: string) => void;
  questionNr: number;
  total: number;
  score: number;
  answered: string;
  isCorrect: string;
}

const QuestionCard: React.FC<Props> = ({
  question,
  answerOptions,
  answerHandler,
  questionNr,
  total,
  score,
  answered,
  isCorrect,
}) => {
  return (
    <QuestionCardLayout>
      <p>Score: {score}</p>
      <div className="card">
        <p>
          Question: {questionNr}/{total}
        </p>
        <p>{question}</p>
        {answerOptions.map((option, index) => (
          <ButtonWrapper
            key={index}
            answered={answered === option}
            isCorrect={option === isCorrect}
            disabled={!!answered.length}
          >
            <button
              onClick={() => answerHandler(option)}
              disabled={!!answered.length}
            >
              {option}
            </button>
          </ButtonWrapper>
        ))}
      </div>
    </QuestionCardLayout>
  );
};

export default QuestionCard;
