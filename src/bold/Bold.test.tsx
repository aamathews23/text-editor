import React from "react";
import { render } from "@testing-library/react";

// Import Component
import { Bold, BoldProps } from "./Bold";

describe("Bold", () => {
    describe("Render", () => {
        test("Renders the Bold component", () => {
            // Setup
            const props: BoldProps = {
                "id": "bold-test",
            };

            const { getByTestId } = render(<Bold id={ props.id } />);

            // Exercise
            const bold = getByTestId(props.id);

            // Verify
            expect(bold).toBeInTheDocument();
        });
    });
});