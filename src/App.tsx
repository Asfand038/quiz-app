import React, { useState } from "react";
import Loader from "react-loader-spinner";

import { GlobalStyle, Wrapper, StyledImage } from "./App.styles";
import QuestionCard from "./components/QuestionCard";
import image from "./images/nattu-adnan.jpg";
import { shuffleArray } from "./utils";

interface Question {
  correct_answer: string;
  incorrect_answers: string[];
  question: string;
}

const TOTAL_QUESTIONS = 10;
const API = `https://opentdb.com/api.php?amount=${TOTAL_QUESTIONS}&type=multiple`;

const App = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [quizStart, setQuizStart] = useState(false);
  const [allQuestions, setAllQuestions] = useState<Question[]>([]);
  const [qNum, setQNum] = useState(0);
  const [currQuestion, setCurrQuestion] = useState("");
  const [answerOptions, setAnswerOptions] = useState<string[]>([]);
  const [answered, setAnswered] = useState("");
  const [isCorrect, setIsCorrect] = useState("");
  const [quizEnd, setQuizEnd] = useState(false);
  const [score, setScore] = useState(0);

  const startQuiz = async () => {
    setIsLoading(true);
    const data = await (await fetch(API)).json();
    setQuizStart(true);
    setAllQuestions(data.results);
    setIsLoading(false);
    questionConfig(data.results, qNum);
  };

  const questionConfig = (questions: Question[], num: number) => {
    const question = questions[num].question;
    const options = shuffleArray([
      ...questions[num].incorrect_answers,
      questions[num].correct_answer,
    ]);
    setCurrQuestion(question);
    setAnswerOptions(options);
  };

  const answerHandler = (option: string) => {
    const questionDetails = allQuestions[qNum];
    if (questionDetails.correct_answer === option) {
      setScore((prevScore) => prevScore + 1);
    }
    setIsCorrect(questionDetails.correct_answer);
    setAnswered(option);
  };

  const nextQuestion = () => {
    setIsCorrect("");
    if (qNum === TOTAL_QUESTIONS - 2) {
      setQuizEnd(true);
    }
    setAnswered("");
    setQNum((prevNum) => prevNum + 1);
    questionConfig(allQuestions, qNum + 1);
  };

  const submitQuiz = () => {
    setQuizStart(false);
    setAllQuestions([]);
    setQNum(0);
    setAnswered("");
    setScore(0);
    setIsCorrect("");
    setQuizEnd(false);
  };

  return (
    <>
      <GlobalStyle />
      <StyledImage src={image} alt="" />
      <Wrapper>
        <h1>REACT QUIZ</h1>
        {!quizStart && (
          <button className="startBtn" onClick={startQuiz}>
            Start
          </button>
        )}
        {isLoading && (
          <div className="spinner">
            <Loader
              type="ThreeDots"
              color="rgb(135, 241, 255)"
              height="100"
              width="100"
            />
          </div>
        )}
        {quizStart && (
          <QuestionCard
            question={currQuestion}
            answerOptions={answerOptions}
            answerHandler={answerHandler}
            questionNr={qNum + 1}
            total={TOTAL_QUESTIONS}
            score={score}
            answered={answered}
            isCorrect={isCorrect}
          />
        )}
        {answered && !quizEnd && (
          <button onClick={nextQuestion} className="next">
            Next Question
          </button>
        )}
        {answered && quizEnd && (
          <button className="submit" onClick={submitQuiz}>
            Submit
          </button>
        )}
      </Wrapper>
    </>
  );
};

export default App;
