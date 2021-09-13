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
    border: 1px solid ${ props => props.contained ? 
        (props.theme.dark ? "#45454D" : "#D0D0D3") : 
        (props.theme.dark ? "#2D2D37" : "#E8E8E9")
    };
    color: ${ props => props.theme.dark ? "#FFFFFF" : "#161621" };
    background-color: ${ props => props.contained ?
        (props.theme.dark ? "#45454D" : "#D0D0D3") :
        (props.theme.dark ? "#2D2D37" : "#E8E8E9")
    };
    &:hover {
        border-color: ${ props => props.contained ?
            (props.theme.dark ? "#161621" : "#B9B9BC") :
            (props.theme.dark ? "#161621" : "#D0D0D3")
        };
        background-color: ${ props => props.contained ?
            (props.theme.dark ? "#161621" : "#B9B9BC") :
            (props.theme.dark ? "#161621" : "#D0D0D3")
        };
        color: ${ props => props.theme.dark ? "#FFFFFF" : "#161621" };
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
