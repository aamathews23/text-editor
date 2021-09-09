import React, { useState } from "react";
import styled from "styled-components";

// Import Components
import { Bold } from "../bold/Bold";
import { Button } from "../button/Button";
import { Italic } from "../italic/Italic";
import { MarkdownInput } from "../markdown-input/MarkdownInput";
import { MarkdownOutput } from "../markdown-output/MarkdownOutput";
import { Preview } from "../preview/Preview";

const Header = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid #D0D0D3;
    padding: 10px;
    border-radius: 5px 5px 0px 0px;
    background-color: #E8E8E9;
`;

const Body = styled.div`
    border: 2px solid #D0D0D3;
    border-top: none;
    border-bottom: none;
`;

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border: 2px solid #D0D0D3;
    padding: 10px;
    border-radius: 0px 0px 5px 5px;
    background-color: #E8E8E9;
`;

export interface TextEditorProps {
    id: string;
}

export const TextEditor = (props: TextEditorProps) => {
    const [markdown, setMarkdown] = useState<string>("");
    const [showPreview, setShowPreview] = useState<boolean>(false);
    const [selectedText, setSelectedText] = useState<string>("");

    const handleOnFormat = (text: string) => {
        const newMarkdown = markdown.replace(selectedText, text);
        setMarkdown(newMarkdown);
    };

    const handleOnSave = () => {
        const element = document.createElement("a");
        element.setAttribute("href", `data:text/plain;charset=utf-8,${encodeURIComponent(markdown)}`);
        element.setAttribute("download", "markdown.md");
        element.style.display = "none";

        document.body.appendChild(element);

        element.click();

        document.body.removeChild(element);
    };

    return (
        <div
            id={ props.id }
            data-testid={ props.id }
        >
            <Header>
                <div>
                    <Bold
                        id="bold-btn"
                        text={ selectedText }
                        callback={ handleOnFormat }
                    />

                    <Italic
                        id="italic-btn"
                        text={ selectedText }
                        callback={ handleOnFormat }
                    />
                </div>

                <div>
                    <Preview
                        id="preview-btn"
                        showPreview={ showPreview }
                        callback={ (newShowPreview) => setShowPreview(!newShowPreview) }
                    />
                </div>                
            </Header>

            <Body>
                {
                    !showPreview &&
                    <MarkdownInput
                        id="markdown-input"
                        placeholder="Enter markdown here..."
                        value={ markdown }
                        callback={ (newMarkdown) => setMarkdown(newMarkdown) }
                        handleTextSelection={ setSelectedText }
                    />
                }

                {
                    showPreview &&
                    <MarkdownOutput
                        id="markdown-output"
                        text={ markdown }
                    />
                }
            </Body>

            <Footer>
                <Button
                    id="save-btn"
                    label="Save"
                    contained
                    callback={ handleOnSave }
                />

                <Button
                    id="reset-btn"
                    label="Reset"
                    callback={ () => setMarkdown("") }
                />
            </Footer>
        </div>
    );
};
