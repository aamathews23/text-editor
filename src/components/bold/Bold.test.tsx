import React from "react";
import { render } from "@testing-library/react";

// Import Component
import { Bold, BoldProps } from "./Bold";
import userEvent from "@testing-library/user-event";

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

    describe("Properties", () => {
        test("The Bold component gets the id prop given", () => {
            // Setup
            const props: BoldProps = {
                "id": "bold-test",
            };

            const { getByTestId } = render(<Bold id={ props.id } />);

            // Exercise
            const bold = getByTestId(props.id);

            // Verify
            expect(bold).toHaveAttribute("id", props.id);
        });
    });

    describe("Functionality", () => {
        test("When the icon is pressed unbolded text passed via prop is bolded and returned through a callback function", () => {
            // Setup
            const expected = "**I am bold.**";
            let newText = "";

            const props: BoldProps = {
                "id": "bold-test",
                "text": "I am bold.",
                "callback": (text) => newText = text,
            };

            const { getByTestId } = render(<Bold id={ props.id } text={ props.text } callback={ props.callback } />);

            // Exercise
            const bold = getByTestId(props.id);
            userEvent.click(bold);

            // Verify
            expect(newText).toBe(expected);
        });

        test("When the icon is pressed bolded text passed via prop is unbolded and returned through a callback function", () => {
            // Setup
            const expected = "I am bold.";
            let newText = "";

            const props: BoldProps = {
                "id": "bold-test",
                "text": "**I am bold.**",
                "callback": (text) => newText = text,
            };

            const { getByTestId } = render(<Bold id={ props.id } text={ props.text } callback={ props.callback } />);

            // Exercise
            const bold = getByTestId(props.id);
            userEvent.click(bold);

            // Verify
            expect(newText).toBe(expected);
        });
    });
});