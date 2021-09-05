import React from "react";
import "./Italic.css";

// Import Image
import ItalicIcon from "../icons/format_italic.png";

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
        <img
            id={ props.id }
            data-testid={ props.id }
            className="format-italic"
            src={ ItalicIcon }
            alt="Italic"
            onClick={ handleOnClick }
        />
    );
};
