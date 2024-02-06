import { useEffect, useState } from "react";
import Questions from "./Components/questions";

const App = () => {
  const [question, setQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [finish, setIfFinish] = useState(false);

  const handleAnswerSubmit = (isCorrect, e) => {
    if (isCorrect) setScore(score + 1);

    e.target.classList.add(isCorrect ? "correct" : "incorrect");

    setTimeout(() => {
      if (question == Questions.length - 1) {
        setIfFinish(true);
      } else {
        setQuestion(question + 1);
      }
    }, 1500);
  };

  if (finish)
    return (
      <div className="app">
        <div className="game-over">
          <span>
            {""}
            Obtuviste {score} de {Questions.length}
            {""}
          </span>
          <button onClick={() => (window.location.href = "/")}>
            Volver a jugar
          </button>
        </div>
      </div>
    );
  return (
    <div className="app">
      <div className="left-side">
        <div className="number-question">
          <span>
            Pregunta {question + 1} de {Questions.length}
          </span>
        </div>
        <div className="question-title">{Questions[question].titulo}</div>
      </div>

      <div className="right-side">
        {Questions[question].opciones.map((answer) => (
          <button
            key={answer.textoRespuesta}
            onClick={(e) => handleAnswerSubmit(answer.isCorrect, e)}
          >
            {""}
            {answer.textoRespuesta}{" "}
          </button>
        ))}
      </div>
    </div>
  );
};

export default App;
