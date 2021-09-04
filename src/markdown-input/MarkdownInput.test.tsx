import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

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

        test("The MarkdownInput component gets the value prop given", () => {
            // Setup
            const props: MarkdownInputProps = {
                "id": "markdown-input-test",
                "value": "# Header 1",
            };

            const { getByDisplayValue } = render(<MarkdownInput id={ props.id } value={ props.value } />);

            // Exercise
            const markdownInput = getByDisplayValue(props.value || "");

            // Verify
            expect(markdownInput).toBeInTheDocument();
        });
    });

    describe("Functionality", () => {
        test("When text is entered into the textarea the provided callback is called", () => {
            // Setup
            const newText = "# Heading 1";
            let expected = "";

            const props: MarkdownInputProps = {
                "id": "markdown-input-test",
                "callback": (text) => expected = text,
            };

            const { getByTestId } = render(<MarkdownInput id={ props.id } callback={ props.callback } />);

            // Exercise
            const markdownInput = getByTestId(props.id);
            userEvent.type(markdownInput, newText);

            // Verify
            expect(expected).toBe(newText);
        });
    });
});
