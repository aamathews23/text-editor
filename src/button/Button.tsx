import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
    outline: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    font-size: 14px;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-family: 'Open Sans', sans-serif;
    border: 1px solid #424242;
    color: ${ props => props.outline ? "#424242" : "white" };
    background-color: ${ props => props.outline ? "white" : "#424242" };
    &:hover {
        border-color: ${ props => props.outline ? "#424242" : "#0f0f0f" };
        background-color: ${ props => props.outline ? "#424242" : "#0f0f0f" };
        color: white;
        cursor: pointer;
    }
`;

export interface ButtonProps {
    id: string;
    label: string;
    outline?: boolean;
    callback?: () => void;
}

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton
            id={ props.id }
            data-testid={ props.id }
            outline={ props.outline || false }
            onClick={ props.callback }
        >
            <strong>{ props.label.toUpperCase() }</strong>
        </StyledButton>
    );
};
