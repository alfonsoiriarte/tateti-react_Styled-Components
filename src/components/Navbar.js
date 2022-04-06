import React from "react";
import styled from "styled-components";

const HeaderStyled = styled.header`
  background-color: #1f2937;
  color: white;
  position: sticky;
  top: 0;
  box-shadow: -0.2rem 0rem 3rem black;
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  font-size: 1.2rem;

  a {
    margin: auto 0.5rem;
  }

`;

export default function Navbar() {
  return (
    <HeaderStyled>
      <a>
        Alfonso Iriarte
      </a>
      <a>
        Ta te ti
      </a>
    </HeaderStyled>
  );
}