import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const GamePlay = () => {
  const message = "Please select the number";
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");


  const generateRandomNumber = (min, max) => {
    return Math.round(Math.random() * (max - min) + min);
  }

  const roleDice = () => {
    if(selectedNumber === null){
      setError("Please select the number");
      return;
    }
    setError("");

    const randomNumber = generateRandomNumber(1, 6);
    setCurrentDice(() => randomNumber);
    if(selectedNumber === randomNumber){
      setScore((prev) => prev+2);
    } else {
      setScore(prev => prev-2);
    }
    setSelectedNumber(null);
  }

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore score={score} message={message}/>
        <NumberSelector
        selectedNumber = {selectedNumber}
        setSelectedNumber = {setSelectedNumber} 
        error = {error}
        setError={setError}
        />
      </div>
      <RoleDice
        currentDice={currentDice}
        roleDice={roleDice} />
    </MainContainer>
  )
}

export default GamePlay;

const MainContainer = styled.main`

  .top_section {
    display: flex;
    align-items: flex-end;
    justify-content: space-around;
    padding-top: 70px;
  }
`
