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

    return (
        <div
            id={ props.id }
            data-testid={ props.id }
        >
            <div className="text-editor-header">
                <div>
                    <Bold
                        id="bold-btn"
                    />

                    <Italic
                        id="italic-btn"
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
                />

                <Button
                    id="reset-btn"
                    label="Reset"
                    outline
                />
            </div>
        </div>
    );
};
