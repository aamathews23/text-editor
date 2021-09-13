import React from "react";
import { render } from "@testing-library/react";

// Import Component
import { Footer, FooterProps } from "./Footer";

describe("Footer", () => {
    describe("Render", () => {
        test("Renders the Footer component", () => {
            // Setup
            const props: FooterProps = {
                "id": "footer-test",
            };

            const { getByText } = render(<Footer id={ props.id } />);

            // Exercise
            const footer = getByText("Created By Aaron Mathews");

            // Verify
            expect(footer).toBeInTheDocument();
        });
    });

    describe("Properties", () => {
        test("The Footer feature gets the id prop given", () => {
            // Setup
            const props: FooterProps = {
                "id": "footer-test",
            };

            const { getByText } = render(<Footer id={ props.id } />);

            // Exercise
            const footer = getByText("Created By Aaron Mathews");

            // Verify
            expect(footer).toHaveAttribute("id", props.id);
        });
    });
});
