import React from "react";
import "./MarkdownInput.css";

export interface MarkdownInputProps {
    id: string;
    placeholder?: string;
    callback?: (input: string) => void;
}

export const MarkdownInput = (props: MarkdownInputProps) => {
    return (
        <div className="container-markdown-input">
            <textarea
                id={ props.id }
                data-testid={ props.id }
                className="markdown-input"
                placeholder={ props.placeholder }
                onChange={ ({ target }) => props.callback ? props.callback(target.value) : null }
            ></textarea>
        </div>
    );
};
