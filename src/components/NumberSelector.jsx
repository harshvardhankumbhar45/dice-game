import styled from "styled-components"
const NumberSelector = ({selectedNumber ,setSelectedNumber, error, setError}) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumber);
  if(selectedNumber) setError("");
  
  return (
    <NumberSelectedContainer>
      <p className="error">{error}</p>     
      <div className="flex">
      {
        arrNumbers.map((val, i) => (
            <Box 
              isselected = {val === selectedNumber}
              key={i} onClick={() => setSelectedNumber(val)}>
              {val}
            </Box>
        ) )
      }
      </div>
      <p>Select Number</p>
    </NumberSelectedContainer>
  )
}

export default NumberSelector

const NumberSelectedContainer = styled.div`

  display: flex;
  flex-direction: column;
  align-items: end;

  .flex {
    display: flex;
    gap: 24px;
  }

  p{
    font-size: 24px;
    font-weight: 700;
  }
  
  .error {
      color: red;
    }
`;

const Box = styled.div`
    height: 72px;
    width: 72px;
    border: 2px solid black;
    font-size: 24px;
    font-weight: 700;
    display: grid;
    place-items: center;
    cursor: pointer;

    background-color: ${(props) => props.isselected ? "black" : "white"};
    color: ${(props) => props.isselected ? "white" : "black"};
`;