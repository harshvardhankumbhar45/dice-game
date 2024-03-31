import styled from "styled-components";

const Rules = () => {
  return (
    <RulesContainer>
      <h2>How to play dice game</h2>
      <div className="text">
        <p>Select any number</p>
        <p>Click on dice image</p>
        <p>After click on dice if selected number is equal to dice number you will get 2 points, if you guess wrong then 2 points will be deducted</p>
      </div>
    </RulesContainer>
  )
}

export default Rules;

const RulesContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  max-width: 900px; 
  gap: 20px; 
  margin: 0 auto;
  background-color: #7bb5e9;
  padding: 15px;
  margin-bottom: 40px;
  border-radius: 5px;

  h2 {
    font-size: 24px;
  };

  .text {
    font-size: 24px;
  }
`;