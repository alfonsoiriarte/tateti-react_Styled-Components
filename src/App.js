import React from "react";
import Navbar from "./components/Navbar";
import Juego from "./components/Juego";
import Footer from './components/Footer';
import styled from "styled-components";

const MainStyled = styled.main`
  height: 100vh;
  color: black;
  background-image: linear-gradient(to right, ${props => props.gradientColor});
  font-family: 'Rubik', sans-serif;
`;

export default function App() {
  

  const [grandientColor, setGradientColor] = React.useState('rgba(239,68,68), rgba(59,130,246)')

  const handlerGradient = puntaje => {
    puntaje.X > puntaje.O ? setGradientColor('rgba(255,0,0,.4), rgba(255,0,0,.7)') : setGradientColor('#0061ff, #60efff');
    puntaje.X === puntaje.O && setGradientColor('rgba(239,68,68), rgba(59,130,246)');

  }

  return (
    <MainStyled gradientColor={grandientColor}>
      <Navbar />
      <Juego handlerGradient={handlerGradient} />
      <Footer/>
    </MainStyled>
  );
}