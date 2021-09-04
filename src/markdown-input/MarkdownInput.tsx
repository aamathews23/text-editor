import React from "react";
import "./MarkdownInput.css";

export interface MarkdownInputProps {
    id: string;
    placeholder?: string;
}

export const MarkdownInput = (props: MarkdownInputProps) => {
    return (
        <div className="container-markdown-input">
            <textarea
                id={ props.id }
                data-testid={ props.id }
                className="markdown-input"
                placeholder={ props.placeholder }
            ></textarea>
        </div>
    );
};
