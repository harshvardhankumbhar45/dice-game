import styled from "styled-components";

const RoleDice = ({currentDice, roleDice}) => {



  console.log(currentDice);

  return (
    <DiceContainer>
      <div className="dice" onClick={roleDice}>
        <img src={`/images/dice/dice-${currentDice}.svg`} alt="dice1" />
      </div>
      <p>Click on the Dice to roll</p>
    </DiceContainer>
  )
}

export default RoleDice;

const DiceContainer = styled.div`
  margin-top: 48px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  
  .dice {
    cursor: pointer;
    img {
      width: 100px;
    }
  }

  p{
    font-size: 24px;
  }
`;
