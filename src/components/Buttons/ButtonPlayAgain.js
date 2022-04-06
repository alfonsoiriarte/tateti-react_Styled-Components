import React from 'react';
import styled from 'styled-components';

const StyledButtonPlayAgain = styled.div`
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    bottom: ${(props) => props.finDelJuego === 0 ? '4rem' : '1000rem'};
    cursor: pointer;
    font-size: 1.4rem;
    color: white;
    padding: 0.3rem 0.8rem;
    outline: 1px solid;
    outline-offset: 0px;
    outline-color: white;
    transition: all 600ms;
    &:hover {
        box-shadow: inset 0 0 20px rgba(255, 255, 255, .5), 0 0 20px rgba(255, 255, 255, .2);
        outline-color: rgba(255, 255, 255, 0);
        outline-offset: 15px;
        text-shadow: 1px 1px 2px #427388; 
    }
    @media (min-height: 768px) {
        font-size: 2rem;
        bottom: ${(props) => props.finDelJuego === 0 ? '4rem' : '1000rem'};
    }
`;

export default function ButtonPlayAgain ({onClick, finDelJuego}) {
    return (
        <div>
            <StyledButtonPlayAgain finDelJuego={finDelJuego} onClick={() => onClick()}>
                PLAY AGAIN
            </StyledButtonPlayAgain>
        </div>
    );
}