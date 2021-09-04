import React, { useState } from "react";
import "./MarkdownInput.css";

export interface MarkdownInputProps {
    id: string;
    placeholder?: string;
    value?: string;
    callback?: (input: string) => void;
}

export const MarkdownInput = (props: MarkdownInputProps) => {
    const [value, setValue] = useState<string>(props.value || "");

    const handleOnChange = ({ target }: any) => {
        if (props.callback) {
            props.callback(target.value);
        }

        setValue(target.value);
    };

    return (
        <div className="container-markdown-input">
            <textarea
                id={ props.id }
                data-testid={ props.id }
                className="markdown-input"
                placeholder={ props.placeholder }
                value={ value }
                onChange={ handleOnChange }
            ></textarea>
        </div>
    );
};
