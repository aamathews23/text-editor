import React, { useEffect, useState } from "react";
import "./MarkdownInput.css";

export interface MarkdownInputProps {
    id: string;
    placeholder?: string;
    value?: string;
    callback?: (input: string) => void;
    handleTextSelection?: (text: string) => void;
}

export const MarkdownInput = (props: MarkdownInputProps) => {
    const [value, setValue] = useState<string>(props.value || "");

    const handleOnChange = ({ target }: any) => {
        if (props.callback) {
            props.callback(target.value);
        }

        setValue(target.value);
    };

    const handleOnClick = ({ target }: any) => {
        if (props.handleTextSelection) {
            const selectedText = target.value.substring(target.selectionStart, target.selectionEnd);

            props.handleTextSelection(selectedText);
        }
    }

    useEffect(
        () => {
            setValue(props.value || "");
        },
        [props.value]
    );

    return (
        <div className="container-markdown-input">
            <textarea
                id={ props.id }
                data-testid={ props.id }
                className="markdown-input"
                placeholder={ props.placeholder }
                value={ value }
                onChange={ handleOnChange }
                onClick={ handleOnClick }
            ></textarea>
        </div>
    );
};
