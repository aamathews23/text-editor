import React from "react";
import "./Bold.css";

import BoldIcon from "../icons/format_bold.png";

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
        <img
            id={ props.id }
            data-testid={ props.id }
            className="format-bold"
            src={ BoldIcon }
            alt="Bold"
            onClick={ handleOnClick }
        />
    );
};
