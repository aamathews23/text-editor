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
    border: 1px solid #9f9f9f;
    color: ${ props => props.outline ? "#9f9f9f" : "white" };
    background-color: ${ props => props.outline ? "white" : "#9f9f9f" };
    &:hover {
        border-color: ${ props => props.outline ? "#9f9f9f" : "#606060" };
        background-color: ${ props => props.outline ? "#9f9f9f" : "#606060" };
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
