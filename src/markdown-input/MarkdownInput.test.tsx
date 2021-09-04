import React from "react";
import { render } from "@testing-library/react";

// Import Component
import { MarkdownInput, MarkdownInputProps } from "./MarkdownInput";

describe("Markdown Input", () => {
    describe("Render", () => {
        test("The MarkdownInput component renders", () => {
            // Setup
            const props: MarkdownInputProps = {
                "id": "markdown-input-test",
                "label": "First Name"
            };

            const { getByLabelText } = render(<MarkdownInput id={ props.id } label={ props.label } />);

            // Exercise
            const markdownInput = getByLabelText(props.label.toUpperCase());

            // Verify
            expect(markdownInput).toBeInTheDocument();
        });
    });

    describe("Properites", () => {
        test("The MarkdownInput component gets the id prop given", () => {
            // Setup
            const props: MarkdownInputProps = {
                "id": "input-test",
                "label": "First Name"
            };

            const { getByLabelText } = render(<MarkdownInput id={ props.id } label={ props.label } />);

            // Exercise
            const markdownInput = getByLabelText(props.label.toUpperCase());

            // Verify
            expect(markdownInput).toHaveAttribute("id", props.id);
        });
    });
});
