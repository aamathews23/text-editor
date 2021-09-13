import React from "react";
import { render } from "@testing-library/react";

// Import Component
import { Header, HeaderProps } from "./Header";

describe("Header", () => {
    describe("Render", () => {
        test("Renders the Header component", () => {
            // Setup
            const props: HeaderProps = {
                "id": "header-test",
            };

            const { getByTestId } = render(<Header id={ props.id } />);

            // Exercise
            const header = getByTestId(props.id);

            // Verify
            expect(header).toBeInTheDocument();
        });
    });

    describe("Properties", () => {
        test("The Header feature gets the id prop given", () => {
            // Setup
            const props: HeaderProps = {
                "id": "header-test",
            };

            const { getByTestId } = render(<Header id={ props.id } />);

            // Exercise
            const header = getByTestId(props.id);

            // Verify
            expect(header).toHaveAttribute("id", props.id);
        });
    });
});
