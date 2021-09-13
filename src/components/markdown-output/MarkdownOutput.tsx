import React from "react";
import styled from "styled-components";

// Import Remarkable
import { Remarkable } from "remarkable";
const MD = new Remarkable();

const Div = styled.div`
    display: flex;
`;

const Output = styled.div`
    background-color: ${ props => props.theme.dark ? "#161621" : "#FFFFFF" };
    padding: 20px 10px;
    margin: 0px;
    width: 100%;
    min-height: 600px;
    max-height: 600px;
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
        <Div>
            <Output
                id={ props.id }
                data-testid={ props.id }
                dangerouslySetInnerHTML={ { "__html": MD.render(props.text || "") } }
            ></Output>
        </Div>
    );
};
