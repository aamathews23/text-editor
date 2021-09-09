import React from "react";
import styled from "styled-components";

// Import Image
import ItalicIcon from "../icons/format_italic.png";

const IconWrapper = styled.div`
    display: inline-block;
    padding: 1px;
    margin-right: 10px;
    height: 24px;
    &:hover {
        border-radius: 5px;
        background-color: ${ props => props.theme.light ? "#D0D0D3" : "#161621" };
        cursor: pointer;
    }
`;

const Icon = styled.img`
    ${ props => props.theme.light ? "" : "filter: invert(1) sepia(0) saturate(1) hue-rotate(255deg);" }
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
        <IconWrapper>
            <Icon
                id={ props.id }
                data-testid={ props.id }
                src={ ItalicIcon }
                alt="Italic"
                onClick={ handleOnClick }
            />
        </IconWrapper>
    );
};
