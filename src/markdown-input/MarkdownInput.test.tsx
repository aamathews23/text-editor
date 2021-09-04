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
            };

            const { getByTestId } = render(<MarkdownInput id={ props.id } />);

            // Exercise
            const markdownInput = getByTestId(props.id);

            // Verify
            expect(markdownInput).toBeInTheDocument();
        });
    });

    describe("Properites", () => {
        test("The MarkdownInput component gets the id prop given", () => {
            // Setup
            const props: MarkdownInputProps = {
                "id": "markdown-input-test",
            };

            const { getByTestId } = render(<MarkdownInput id={ props.id } />);

            // Exercise
            const markdownInput = getByTestId(props.id);

            // Verify
            expect(markdownInput).toHaveAttribute("id", props.id);
        });

        test("The MarkdownInput component gets the placeholder prop given", () => {
            // Setup
            const props: MarkdownInputProps = {
                "id": "markdown-input-test",
                "placeholder": "Enter markdown here...",
            };

            const { getByPlaceholderText } = render(<MarkdownInput id={ props.id } placeholder={ props.placeholder } />);

            // Exercise
            const markdownInput = getByPlaceholderText(props.placeholder || "");

            // Verify
            expect(markdownInput).toBeInTheDocument();
        });
    });
});
