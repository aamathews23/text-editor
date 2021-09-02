import React from "react";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

// Import Component
import { Button, ButtonProps } from "../button/Button";

describe("Button", () => {
    describe("Render", () => {
        test("The button renders", () => {
            // Setup
            const props: ButtonProps = {
                "id": "button-test",
                "label": "Click me!"
            };

            const { getByText } = render(
                <Button
                    id={ props.id }
                    label={ props.label }
                />
            );

            // Exercise
            const button = getByText(props.label.toUpperCase());

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

            const { getByText } = render(
                <Button
                    id={ props.id }
                    label={ props.label }
                />
            );

            // Exercise
            const button = getByText(props.label.toUpperCase());

            // Verify
            expect(button).toHaveAttribute("id", props.id);
        });

        test("The button gets the label of the prop given", () => {
            // Setup
            const props: ButtonProps = {
                "id": "button-test",
                "label": "Click me!"
            };

            const { getByText } = render(
                <Button
                    id={ props.id }
                    label={ props.label }
                />
            );

            // Exercise
            const button = getByText(props.label.toUpperCase());

            // Verify
            expect(button).toBeInTheDocument();
        });

        test("The button get the outline class when given the prop", () => {
            // Setup
            const props: ButtonProps = {
                "id": "button-test",
                "label": "Click me!",
                "outline": true
            };

            const { getByText } = render(
                <Button
                    id={ props.id }
                    label={ props.label }
                    outline={ props.outline }
                />
            );

            // Exercise
            const button = getByText(props.label.toUpperCase());
            const classList = button.classList;

            // Verify
            expect(classList).toContain("outline");
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

            const { getByText } = render(
                <Button
                    id={ props.id }
                    label={ props.label }
                    callback={ props.callback }
                />
            );

            // Exercise
            const button = getByText(props.label.toUpperCase());

            userEvent.click(button);

            // Verify
            expect(test).toBe("clicked");
        });
    });
});
