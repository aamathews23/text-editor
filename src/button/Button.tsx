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
        (props.theme.light ? "#D0D0D3" : "#45454D") : 
        (props.theme.light ? "#E8E8E9" : "#2D2D37")
    };
    color: ${ props => props.theme.light ? "#161621" : "#FFFFFF" };
    background-color: ${ props => props.contained ?
        (props.theme.light ? "#D0D0D3" : "#45454D") :
        (props.theme.light ? "#E8E8E9" : "#2D2D37")
    };
    &:hover {
        border-color: ${ props => props.contained ?
            (props.theme.light ? "#B9B9BC" : "#161621") :
            (props.theme.light ? "#D0D0D3" : "#161621")
        };
        background-color: ${ props => props.contained ?
            (props.theme.light ? "#B9B9BC" : "#161621") :
            (props.theme.light ? "#D0D0D3" : "#161621")
        };
        color: ${ props => props.theme.light ? "#161621" : "#FFFFFF" };
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
