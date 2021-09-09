import React, { useEffect, useState } from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
`;

const Textarea = styled.textarea`
    background-color: ${ props => props.theme.light ? "#FFFFFF" : "#161621" };
    padding: 20px 10px;
    margin: 0px;
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    font-size: 14px;
    color: ${ props => props.theme.light ? "#161621" : "#FFFFFF" };
    font-family: 'Open Sans', sans-serif;
    resize: none;
    outline: none;
    border: none;
`;

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
        <Div>
            <Textarea
                id={ props.id }
                data-testid={ props.id }
                placeholder={ props.placeholder }
                value={ value }
                onChange={ handleOnChange }
                onClick={ handleOnClick }
            ></Textarea>
        </Div>
    );
};
