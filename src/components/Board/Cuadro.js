import React, { useState } from 'react';
import styled from 'styled-components';

const CuadroStyled = styled.div`
    background-color: white;
    width: 6rem;
    height: 6rem;
    margin: 0.4rem;
    border-radius: 100rem;
    box-shadow: 0.3rem 0.6rem 2rem -1rem #44403c;
    color: ${props => props.ColorTurno};
    cursor: pointer;
    p {
        text-align: center;
        font-size: 5rem;
        margin: 0;
        vertical-align: center;
        @media (min-height: 768px) {
            font-size: 7rem;
        }
    }
    @media (min-height: 768px) {
        width: 9rem;
        height: 9rem;
        margin: 1rem;
    }
`;

function Cuadro ({ turno, value, onClick}) {
    const [color, setColor] = useState('red')

    const handleClick = () => {
    (turno !== null && value === null) && onClick();
    turno === 'X' ? setColor('red') : setColor('blue');
    }

    return (
        <CuadroStyled ColorTurno={color} onClick={() => handleClick()} >
            <p>{value}</p>
        </CuadroStyled>
    )

}


export default Cuadro;