import styled from "styled-components"

const StartGame = ({toggle}) => {
  return (
    <Container>
      <div>
        <img src="/images/dice_image.jpg" alt="dice_img" />
      </div>
      <div className="content">
        <h1>DICE GAME</h1>
        <Button onClick={toggle}>Play Now</Button>
      </div>
    </Container>
  )
}

export default StartGame

const Container = styled.div`
    max-width: 1180px;
    display: flex;
    margin: 0 auto;
    height: 100vh;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .content {
        display: flex;
        flex-direction: column;
        align-items: flex-end;
        h1 {
            font-size: 96px;
        }
    }
`;

const Button = styled.button`
display: flex;
flex-direction : column;
justify-content: center;
align-items: center;
padding: 10px 18px;
border: 1px solid transparent;
outline: none;
border-radius: 5px;
cursor: pointer;

width: 220px;
height: 44px;

background-color: black;
color: white;
font-size: 16px;
transition: 0.5s background ease-in;

&:hover{
    background-color: white;
    color: black;
    border: 1px solid black;
    transition: 0.5s background ease-in;
}
`;
