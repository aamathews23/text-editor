import React from "react";
import styled from "styled-components";

// Import Remarkable
import { Remarkable } from "remarkable";
const MD = new Remarkable();

const Div = styled.div`
    display: flex;
`;

const Output = styled.div`
    background-color: ${ props => props.theme.light ? "#FFFFFF" : "#161621" };
    padding: 20px 10px;
    margin: 0px;
    width: 100%;
    min-height: 300px;
    max-height: 300px;
    font-size: 14px;
    color: ${ props => props.theme.light ? "#161621" : "#FFFFFF" };
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
