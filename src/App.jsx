import styled from 'styled-components';
import './App.css';
import StartGame from './components/StartGame';
import { useState } from 'react';
import GamePlay from './components/GamePlay';

const App = () => {
  const [isGameStarted, setIsGameStarted] = useState(true);
  const toggleHandler = () => {
    setIsGameStarted((prev) => !prev);
  }

  return (
    <>
      {isGameStarted? <GamePlay /> : <StartGame toggle={toggleHandler} />}
    </>
  )
}

export default App
