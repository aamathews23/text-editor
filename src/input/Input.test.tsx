import React from "react";
import { render } from "@testing-library/react";

// Import Component
import { Input, InputProps } from "./Input";

describe("Input", () => {
    describe("Render", () => {
        test("The Input component renders", () => {
            // Setup
            const props: InputProps = {
                "id": "input-test",
                "label": "First Name"
            };

            const { getByLabelText } = render(<Input id="input-test" label={ props.label } />);

            // Exercise
            const input = getByLabelText(props.label);

            // Verify
            expect(input).toBeInTheDocument();
        });
    });
});
