import React from "react";
import styled from "styled-components";

// Import Remarkable
import { Remarkable } from "remarkable";
const MD = new Remarkable();

const Output = styled.div`
    background-color: ${ props => props.theme.dark ? "#161621" : "#FFFFFF" };
    padding: 20px 10px;
    width: 100%;
    height: 100%;
    box-sizing: border-box;
    margin: 0px;
    font-size: 14px;
    color: ${ props => props.theme.dark ? "#FFFFFF" : "#161621" };
    font-family: 'Open Sans', sans-serif;
    overflow-y: auto;
`;

export interface MarkdownOutputProps {
    id: string;
    text?: string;
}

export const MarkdownOutput = (props: MarkdownOutputProps) => {
    return (
        <Output
            id={ props.id }
            data-testid={ props.id }
            dangerouslySetInnerHTML={ { "__html": MD.render(props.text || "") } }
        ></Output>
    );
};
