import React from "react";
import styled from "styled-components";

// Import Image
import ItalicIcon from "../icons/format_italic.png";

const Icon = styled.img`
    padding: 1px;
    margin-right: 10px;
    &:hover {
        border-radius: 5px;
        background-color: #dfdfdf;
        cursor: pointer;
    }
`;

export interface ItalicProps {
    id: string;
    text?: string;
    callback?: (text: string) => void;
}

export const Italic = (props: ItalicProps) => {
    const handleOnClick = () => {
        let italizedText = "";

        if (props.text) {
            if (props.text.startsWith("_") && props.text.endsWith("_")) {
                italizedText = props.text.replace(/_/g, "");
            } else {
                italizedText = `_${props.text}_`;
            }
        }

        if (props.callback) {
            props.callback(italizedText);
        }
    };

    return (
        <Icon
            id={ props.id }
            data-testid={ props.id }
            src={ ItalicIcon }
            alt="Italic"
            onClick={ handleOnClick }
        />
    );
};
