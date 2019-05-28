import React from 'react';
import styled from 'styled-components';

const Cd = styled.div`
    border: 2px solid palevioletred;
    width: 300px;
    height: 150px;
`;

const Btn = styled.button`
    font-size: 1em;
    margin: 1em;
    padding: 0.25em 1em;
    border: 2px solid tomato;
    border-radius: 3px; 
    color: tomato;
`

const Card = (props) => {
    const handleClick = () => {
        props.onBookDelete(props.bookIndex)
    }
    return (
        <Cd>
            <p>{props.title}</p>
            <p>{props.author}</p>
            {/* <Btn onClick={props.onBookDelete}>Delete</Btn> */}
            <Btn onClick={handleClick}>Delete</Btn>
        </Cd>
    );
};

export default Card;
