import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Import Component
import { Italic, ItalicProps } from "./Italic";

describe("Italic", () => {
    describe("Render", () => {
        test("The Italic component is rendered", () => {
            // Setup
            const props: ItalicProps = {
                "id": "italic-test",
            };

            const { getByTestId } = render(<Italic id={ props.id } />);

            // Exercise
            const italic = getByTestId(props.id);

            // Verify
            expect(italic).toBeInTheDocument();
        });
    });

    describe("Properties", () => {
        test("The Italic component gets the id prop given", () => {
            // Setup
            const props: ItalicProps = {
                "id": "italic-test",
            };

            const { getByTestId } = render(<Italic id={ props.id } />);

            // Exercise
            const italic = getByTestId(props.id);

            // Verify
            expect(italic).toHaveAttribute("id", props.id);
        });
    });

    describe("Functionality", () => {
        test("When the icon is pressed unitalized text passed via prop is italized and returned through a callback function", () => {
            // Setup
            const expected = "_I am italic._";
            let newText = "";

            const props: ItalicProps = {
                "id": "italic-test",
                "text": "I am italic.",
                "callback": (text) => newText = text,
            };

            const { getByTestId } = render(<Italic id={ props.id } text={ props.text } callback={ props.callback } />);

            // Exercise
            const italic = getByTestId(props.id);
            userEvent.click(italic);

            // Verify
            expect(newText).toBe(expected);
        });

        test("When the icon is pressed italized text passed via prop is unitalized and returned through a callback function", () => {
            // Setup
            const expected = "I am italic.";
            let newText = "";

            const props: ItalicProps = {
                "id": "italic-test",
                "text": "_I am italic._",
                "callback": (text) => newText = text,
            };

            const { getByTestId } = render(<Italic id={ props.id } text={ props.text } callback={ props.callback } />);

            // Exercise
            const italic = getByTestId(props.id);
            userEvent.click(italic);

            // Verify
            expect(newText).toBe(expected);
        });
    });
});
