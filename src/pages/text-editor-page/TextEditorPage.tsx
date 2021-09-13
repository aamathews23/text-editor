import React from "react";
import styled from "styled-components";

// Import Features
import { Header } from "../../features/header/Header";
import { Footer } from "../../features/footer/Footer";
import { TextEditor } from "../../features/text-editor/TextEditor";

const Body = styled.div`
    width: 80%;
    margin: auto;
`;

export const TextEditorPage = () => {
    return (
        <>
            <Header id="text-editor-page-header" />
            
            <Body>
                <TextEditor id="text-editor" dark={ false } />
            </Body>

            <Footer id="text-editor-page-footer" />         
        </>
    );
};
