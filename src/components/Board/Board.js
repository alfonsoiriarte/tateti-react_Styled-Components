import React from 'react';
import Cuadro from './Cuadro'
import styled from 'styled-components';

const TatetiContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 2rem;
`;

function Board ({ turno, cuadros, onClick }){
    
    const cuadroCreator = values => (
        values.map(value => (
            <Cuadro 
                turno={turno}
                onClick={() => onClick(value)}
                value={cuadros[value]}
                key={`square_${value}`}
            />
        ))
    );

    return( 
        <TatetiContainer>
            <div style={{display: "flex"}} className='flex justify-center'>
                {cuadroCreator([0,1,2])}
            </div>
            <div style={{display: "flex"}} className='flex justify-center'>
                {cuadroCreator([3,4,5])}
            </div>
            <div style={{display: "flex"}} className='flex justify-center'>
                {cuadroCreator([6,7,8])}
            </div>
        </TatetiContainer>
    )
}

export default Board;
