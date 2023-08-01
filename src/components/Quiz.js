import React, { useContext, useState } from "react";
import { Questions } from "../helpers/Questions";
import { QuizContext } from "../helpers/Context";

const Quiz = () => {
  const { score, setScore, setGameState } = useContext(QuizContext);

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [optionChosen, setOptionChosen] = useState("");

  const nextQuestion = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    // alert(score);
    setCurrentQuestion(currentQuestion + 1);
  };

  const prevQuestion = () => {
    // if (Questions[currentQuestion].answer === optionChosen) {
    //   setScore(score - 1);
    // }
    if (score > 0) {
      setScore(score - 1);
    }
    setCurrentQuestion(currentQuestion - 1);
  };

  const finishQuiz = () => {
    if (Questions[currentQuestion].answer === optionChosen) {
      setScore(score + 1);
    }
    setGameState("endScreen");
  };

  return (
    <div className="Quiz">
      <h1>{Questions[currentQuestion].prompt}</h1>
      <div className="options">
        <button onClick={() => setOptionChosen("optionA")}>
          {Questions[currentQuestion].optionA}
        </button>
        <button onClick={() => setOptionChosen("optionB")}>
          {Questions[currentQuestion].optionB}
        </button>
        <button onClick={() => setOptionChosen("optionC")}>
          {Questions[currentQuestion].optionC}
        </button>
        <button onClick={() => setOptionChosen("optionD")}>
          {Questions[currentQuestion].optionD}
        </button>
      </div>

      {currentQuestion === Questions.length - 1 ? (
        <div className="seekBtns">
          <button onClick={prevQuestion}> Previous Question</button>
          <button onClick={finishQuiz}>Finish Quiz</button>
        </div>
      ) : (
        <div className="seekBtns">
          {currentQuestion > 0 && (
            <button onClick={prevQuestion}> Previous Question</button>
          )}
          <button onClick={nextQuestion}> Next Question</button>
        </div>
      )}
    </div>
  );
};

export default Quiz;
