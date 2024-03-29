import { useState } from "react";
import NumberSelector from "./NumberSelector";
import RoleDice from "./RoleDice";
import TotalScore from "./TotalScore";
import styled from "styled-components";

const GamePlay = () => {
  const [score, setScore] = useState();
  const [selectedNumber, setSelectedNumber] = useState(null);
  const [currentDice, setCurrentDice] = useState(1);

  return (
    <MainContainer>
      <div className="top_section">
        <TotalScore />
        <NumberSelector
        selectedNumber = {selectedNumber}
        setSelectedNumber = {setSelectedNumber} />
      </div>
      <RoleDice
        currentDice={currentDice}
        setCurrentDice={setCurrentDice} />
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
