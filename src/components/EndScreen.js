import React, { useContext } from "react";
import { QuizContext } from "../helpers/Context";
import { Questions } from "../helpers/Questions";

const EndScreen = () => {
  const { score, setScore, setGameState, setName, name } =
    useContext(QuizContext);

  const restartQuiz = () => {
    setScore(0);
    setGameState("menu");
    setName("");
  };

  return (
    <div className="EndScreen">
      <h1>Quiz Finished</h1>
      <h3>
        {`${name}'s`} score is : {score} / {Questions.length}
      </h3>
      <button onClick={restartQuiz}> Restart Game </button>
    </div>
  );
};

export default EndScreen;
