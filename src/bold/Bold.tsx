import React from "react";
import styled from "styled-components";

// Import Image
import BoldIcon from "../icons/format_bold.png";

const Icon = styled.img`
    padding: 1px;
    margin-right: 10px;
    &:hover {
        border-radius: 5px;
        background-color: ${ props => props.theme.light ? "#D0D0D3" : "#161621" };
        cursor: pointer;
    }
`;

export interface BoldProps {
    id: string;
    text?: string;
    callback?: (text: string) => void;
}

export const Bold = (props: BoldProps) => {
    const handleOnClick = () => {
        let boldText = "";

        if (props.text) {
            if (props.text.startsWith("**") && props.text.endsWith("**")) {
                boldText = props.text.replace(/\*\*/g, "");
            } else {
                boldText = `**${props.text}**`;
            }
        }

        if (props.callback) {
            props.callback(boldText);
        }
    };

    return (
        <Icon
            id={ props.id }
            data-testid={ props.id }
            src={ BoldIcon }
            alt="Bold"
            onClick={ handleOnClick }
        />
    );
};
