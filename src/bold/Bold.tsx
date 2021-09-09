import React from "react";
import styled from "styled-components";

import BoldIcon from "../icons/format_bold.png";

const Icon = styled.img`
    border: 0.1rem solid #424242;
    border-radius: 0.3rem;
    &:hover {
        background-color: #ebebeb;
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
