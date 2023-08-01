import React, { useContext, useRef } from "react";
import { QuizContext } from "../helpers/Context";

const MainMenu = () => {
  const { setGameState, name, setName } = useContext(QuizContext);

  const handleStartQuiz = (e) => {
    e.preventDefault();
    if (inputRef.current.value === "") return;
    setGameState("quiz");
    setName(inputRef.current.value);
    // console.log(inputRef.current.value);
  };

  const inputRef = useRef();

  return (
    <form className="Menu" onSubmit={handleStartQuiz}>
      <label className="username">Enter Your Name: </label>
      <input
        type="text"
        value={name}
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
      />
      <button>Start Quiz</button>
    </form>
  );
};

export default MainMenu;
