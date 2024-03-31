import styled from "styled-components"
import { Button } from "../styled/Button";

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

<Button />
