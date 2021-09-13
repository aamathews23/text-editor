import React from "react";
import { render } from "@testing-library/react";

// Import Page
import { TextEditorPage } from "./TextEditorPage";

describe("Text Editor Page", () => {
    describe("Render", () => {
        test("A header is rendered", () => {
            // Setup
            const { getByTestId } = render(<TextEditorPage />);

            // Exercise
            const header = getByTestId("text-editor-page-header");

            // Verify
            expect(header).toBeInTheDocument();
        });

        test("A text editor is rendered", () => {
            // Setup
            const { getByTestId } = render(<TextEditorPage />);

            // Exercise
            const textEditor = getByTestId("text-editor");

            // Verify
            expect(textEditor).toBeInTheDocument();
        });

        test("A footer is rendered", () => {
            // Setup
            const { getByText } = render(<TextEditorPage />);

            // Exercise
            const footer = getByText("Created By Aaron Mathews");

            // Verify
            expect(footer).toBeInTheDocument();
        });
    });
});