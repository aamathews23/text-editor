import React from "react";
import { render } from "@testing-library/react";

// Import Component
import { MarkdownOutput, MarkdownOutputProps } from "./MarkdownOutput";

describe("Markdown Output", () => {
    describe("Render", () => {
        test("The MarkdownOutput component is rendered", () => {
            // Setup
            const props: MarkdownOutputProps = {
                "id": "markdown-output-test",
            };

            const { getByTestId } = render(<MarkdownOutput id={ props.id } />);

            // Exercise
            const markdownOutput = getByTestId(props.id);

            // Verify
            expect(markdownOutput).toBeInTheDocument();
        });
    });

    describe("Properties", () => {
        test("The MarkdownOutput component gets the id prop given", () => {
            // Setup
            const props: MarkdownOutputProps = {
                "id": "markdown-output-test",
            };

            const { getByTestId } = render(<MarkdownOutput id={ props.id } />);

            // Exercise
            const markdownOutput = getByTestId(props.id);

            // Verify
            expect(markdownOutput).toHaveAttribute("id", props.id);
        });

        test("The MarkdownOutput component renders the given text prop", () => {
            // Setup
            const props: MarkdownOutputProps = {
                "id": "markdown-output-test",
                "text": "# Header 1",
            };

            const { getByText } = render(<MarkdownOutput id={ props.id } text={ props.text } />);

            // Exercise
            const header1 = getByText("Header 1");

            // Verify
            expect(header1).toBeInTheDocument();
            expect(header1).toBeInstanceOf(HTMLHeadingElement);
        });
    });
});
