import React, { useState } from "react";
import "./TextEditor.css";

// Import Components
import { Bold } from "../bold/Bold";
import { Button } from "../button/Button";
import { Italic } from "../italic/Italic";
import { MarkdownInput } from "../markdown-input/MarkdownInput";
import { MarkdownOutput } from "../markdown-output/MarkdownOutput";
import { Preview } from "../preview/Preview";

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
            <div className="text-editor-header">
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
            </div>

            <div className="text-editor-body">
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
            </div>

            <div className="text-editor-footer">
                <Button
                    id="save-btn"
                    label="Save"
                    callback={ handleOnSave }
                />

                <Button
                    id="reset-btn"
                    label="Reset"
                    outline
                    callback={ () => setMarkdown("") }
                />
            </div>
        </div>
    );
};
