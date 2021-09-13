import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    margin: 10px;
    padding: 0px;
    font-size: 14px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
`;

export interface FooterProps {
    id: string;
}

export const Footer = (props: FooterProps) => {
    return (
        <Div id={ props.id }>
            Created By Aaron Mathews
        </Div>
    );
};
