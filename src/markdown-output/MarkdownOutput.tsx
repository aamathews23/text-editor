import React from "react";
import "./MarkdownOutput.css";

// Import Remarkable
import { Remarkable } from "remarkable";
const MD = new Remarkable();

export interface MarkdownOutputProps {
    id: string;
    text?: string;
}

export const MarkdownOutput = (props: MarkdownOutputProps) => {
    return (
        <div
            className="container-markdown-output"
        >
            <div
                id={ props.id }
                data-testid={ props.id }
                className="markdown-output"
                dangerouslySetInnerHTML={ { "__html": MD.render(props.text || "") } }
            ></div>
        </div>
    );
};
