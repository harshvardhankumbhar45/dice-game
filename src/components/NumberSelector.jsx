import styled from "styled-components"
const NumberSelector = ({selectedNumber ,setSelectedNumber}) => {
  const arrNumbers = [1, 2, 3, 4, 5, 6];
  console.log(selectedNumber);
  
  return (
    <NumberSelectedContainer>     
      <div className="flex">
      {
        arrNumbers.map((val, i) => (
            <Box 
              isSelected = {val === selectedNumber}
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

    background-color: ${(props) => props.isSelected ? "black" : "white"};
    color: ${(props) => props.isSelected ? "white" : "black"};
`;