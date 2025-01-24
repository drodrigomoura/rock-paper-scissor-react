import { useState } from "react";
import "./App.css";

const ROCK = "rock";
const PAPER = "paper";
const SCISSOR = "scissor";
const CHOICES = [ROCK, PAPER, SCISSOR];

const emoji = {
  [ROCK]: "👊",
  [PAPER]: "🖐️",
  [SCISSOR]: "✌️",
};

function App() {
  const [result, setResult] = useState(null);
  const [yourChoice, setYourChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [yourScore, setYourScore] = useState(0);
  const [computerScore, setComputerScore] = useState(0);

  const checkWinner = (userChoice, computerChoice) => {
    if (userChoice === computerChoice) {
      return "It's a tie";
    }

    if (userChoice === ROCK) {
      return computerChoice === SCISSOR ? "You Win!" : "Computer Win!";
    }

    if (userChoice === PAPER) {
      return computerChoice === ROCK ? "You Win!" : "Computer Win!";
    }

    if (userChoice === SCISSOR) {
      return computerChoice === PAPER ? "You Win!" : "Computer Win!";
    }
  };

  const onPlay = (choice) => {
    const computerChoice = CHOICES[Math.floor(Math.random() * 3)];
    setYourChoice(choice);
    setComputerChoice(computerChoice);

    const response = checkWinner(choice, computerChoice);

    setResult(response);

    if (response === "You Win!") {
      console.log("rst", response);
      setYourScore((prev) => prev + 1);
      return;
    }

    if (response === "Computer Win!") {
      setComputerScore((prev) => prev + 1);
      return;
    }
  };

  const onReset = () => {
    setYourScore(0);
    setComputerScore(0);
    setYourChoice("");
    setComputerChoice("");
    setResult("");
  };

  return (
    <div className="app">
      <h1>Rock Paper Scissors</h1>
      <div className="board">
        <div className="choices_container">
          <button onClick={() => onPlay(ROCK)}>👊</button>
          <button onClick={() => onPlay(PAPER)}>🖐</button>
          <button onClick={() => onPlay(SCISSOR)}>✌️</button>
        </div>

        <div className="results">
          <div>Your choice: {emoji[yourChoice]}</div>
          <div>Computer choice: {emoji[computerChoice]}</div>

          <div>Result: {result}</div>
        </div>

        <div className="score">
          <div>Your score: {yourScore}</div>
          <div>Computer score: {computerScore}</div>
        </div>
      </div>
      <button onClick={onReset}>Reset</button>
    </div>
  );
}

export default App;
