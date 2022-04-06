import React from "react";
import styled from "styled-components";

const DivStats = styled.div`
  color: white;
  display: flex;
  cursor: default;
  width: fit-content;
  height: fit-content;
  margin: auto;
  margin-top: 7rem;
  justify-content: center;
  box-shadow: 0rem 0.3rem 1rem #44403c;
  p {
    font-size: 1.2rem;
    margin: 0;
    background-color: #3b82f6;
    padding: 0.5rem 1.3rem;
    justify-content: center;
    @media (min-height: 768px) {
      font-size: 1.7rem;
    }
  }
  p:first-child {
    background-color: #ef4444;
  }
  @media (min-height: 768px) {
    margin-top: 8rem;
  }
`;

export default function Stats(props) {
  return (
    <DivStats>
      <p>Red score: {props.puntaje.X}</p>
      <p>Blue score: {props.puntaje.O}</p>
    </DivStats>
  );
}