import React from "react";
import styled from "styled-components";

interface StyledButtonProps {
    contained: boolean;
}

const StyledButton = styled.button<StyledButtonProps>`
    font-size: 14px;
    padding: 0.5rem 1rem;
    border-radius: 1rem;
    font-family: 'Open Sans', sans-serif;
    border: 1px solid ${ props => props.contained ? "#D0D0D3" : "#E8E8E9" };
    color: #161621;
    background-color: ${ props => props.contained ? "#D0D0D3" : "#E8E8E9" };
    &:hover {
        border-color: ${ props => props.contained ? "#B9B9BC" : "#D0D0D3" };
        background-color: ${ props => props.contained ? "#B9B9BC" : "#D0D0D3" };
        color: #161621;
        cursor: pointer;
    }
`;

export interface ButtonProps {
    id: string;
    label: string;
    contained?: boolean;
    callback?: () => void;
}

export const Button = (props: ButtonProps) => {
    return (
        <StyledButton
            id={ props.id }
            data-testid={ props.id }
            contained={ props.contained || false }
            onClick={ props.callback }
        >
            <strong>{ props.label.toUpperCase() }</strong>
        </StyledButton>
    );
};
