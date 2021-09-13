import React from "react";
import styled from "styled-components";

const Div = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 10px;
    padding: 0px;
    font-size: 14px;
    width: 100%;
    font-family: 'Open Sans', sans-serif;
`;

export interface HeaderProps {
    id: string;
}

export const Header = (props: HeaderProps) => {
    return (
        <Div id={ props.id }>
            <h1>Markdown App</h1>
        </Div>
    );
};
