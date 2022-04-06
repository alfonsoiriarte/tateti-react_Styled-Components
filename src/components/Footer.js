import React from "react";
import styled from "styled-components";

const FooterDiv = styled.div`
  background-color: #1f2937;
  color: white;
  position: fixed;
  width: 100%;
  bottom: 0;
  p {
    margin: 0 auto;
    padding: 1rem;
    max-width: fit-content;
  }
`

export default function Footer() {
  return (
    <FooterDiv className="fixed w-full bottom-0 bg-gray-800">
        <p className="lg:text-center text-sm text-white p-2 m-3 left-50 text-center">Code By Alfonso. 👾</p>
    </FooterDiv>
  );
}