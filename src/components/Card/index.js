import React from 'react';
import styled from 'styled-components';

const Cd = styled.div`
    border: 2px solid palevioletred;
    width: 300px;
    height: 150px;
`;

const Card = (props) => (
    <Cd>
        <p>{props.title}</p>
        <p>{props.author}</p>
    </Cd>
);

export default Card;
