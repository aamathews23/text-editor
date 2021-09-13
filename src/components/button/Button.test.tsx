import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Import Component
import { Button, ButtonProps } from "../button/Button";

describe("Button", () => {
    describe("Render", () => {
        test("The Button component renders", () => {
            // Setup
            const props: ButtonProps = {
                "id": "button-test",
                "label": "Click me!"
            };

            const { getByTestId } = render(
                <Button
                    id={ props.id }
                    label={ props.label }
                />
            );

            // Exercise
            const button = getByTestId(props.id);

            // Verify
            expect(button).toBeInTheDocument();
        });
    });
    
    describe("Properties", () => {
        test("The button gets the id of the prop given", () => {
            // Setup
            const props: ButtonProps = {
                "id": "button-test",
                "label": "Click me!"
            };

            const { getByTestId } = render(
                <Button
                    id={ props.id }
                    label={ props.label }
                />
            );

            // Exercise
            const button = getByTestId(props.id);

            // Verify
            expect(button).toHaveAttribute("id", props.id);
        });

        test("The button gets the label of the prop given", () => {
            // Setup
            const props: ButtonProps = {
                "id": "button-test",
                "label": "Click me!"
            };

            const { getByTestId } = render(
                <Button
                    id={ props.id }
                    label={ props.label }
                />
            );

            // Exercise
            const button = getByTestId(props.id);

            // Verify
            expect(button).toBeInTheDocument();
        });
    });

    describe("Functionality", () => {
        test("When the button is clicked the given callback function is called", () => {
            // Setup
            let test = "";

            const props: ButtonProps = {
                "id": "button-test",
                "label": "Click me!",
                "callback": () => test = "clicked"
            };

            const { getByTestId } = render(
                <Button
                    id={ props.id }
                    label={ props.label }
                    callback={ props.callback }
                />
            );

            // Exercise
            const button = getByTestId(props.id);

            userEvent.click(button);

            // Verify
            expect(test).toBe("clicked");
        });
    });
});
