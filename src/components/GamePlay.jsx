import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";
import { Button, OutlineButton } from "../styled/Button";
import Rules from "./Rules";

const GamePlay = () => {
  const message = "Please select the number";
  const [score, setScore] = useState(0);
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);
  const [error, setError] = useState("");
  const [showRules, setShowRules] = useState(false);


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

  const resetScore = () => {
    setScore(0);
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
      <div className="btn">
        <OutlineButton onClick={resetScore}>Reset</OutlineButton>
        <Button onClick={() => setShowRules((prev => !prev))}>
          {
            showRules ? "Hide Rules" : "Show Rules"
          }</Button>
      </div>
        {
          showRules && <Rules /> 
          }
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

  .btn {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 10px;
    margin-top: 40px;
    margin-bottom: 40px;
  }
`
