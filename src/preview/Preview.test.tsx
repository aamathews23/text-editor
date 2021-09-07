import React from "react";
import { render } from "@testing-library/react";

// Import Component
import { Preview, PreviewProps } from "./Preview";
import userEvent from "@testing-library/user-event";

describe("Preview", () => {
    describe("Render", () => {
        test("Renders the Preview component", () => {
            // Setup
            const props: PreviewProps = {
                "id": "preview-test",
            };

            const { getByTestId } = render(<Preview id={ props.id } />);

            // Exercise
            const preview = getByTestId(props.id);

            // Verify
            expect(preview).toBeInTheDocument();
        });
    });

    describe("Properties", () => {
        test("The Preview component gets the id prop given", () => {
            // Setup
            const props: PreviewProps = {
                "id": "preview-test",
            };

            const { getByTestId } = render(<Preview id={ props.id } />);

            // Exercise
            const preview = getByTestId(props.id);

            // Verify
            expect(preview).toHaveAttribute("id", props.id);
        });
    });

    describe("Functionality", () => {
        test("When the icon is pressed and the showPreview is true, a callback will be called that changes showPreview to false", () => {
            // Setup
            const expected = false;
            let newShowPreview = true;

            const props: PreviewProps = {
                "id": "preview-test",
                "showPreview": true,
                "callback": (showPreview) => newShowPreview = !showPreview,
            };

            const { getByTestId } = render(<Preview id={ props.id } showPreview={ props.showPreview } callback={ props.callback } />);

            // Exercise
            const preview = getByTestId(props.id);
            userEvent.click(preview);

            // Verify
            expect(newShowPreview).toBe(expected);
        });

        test("When the icon is pressed and the showPreview is false, a callback will be called that changes showPreview to true", () => {
            // Setup
            const expected = true;
            let newShowPreview = false;

            const props: PreviewProps = {
                "id": "preview-test",
                "showPreview": false,
                "callback": (showPreview) => newShowPreview = !showPreview,
            };

            const { getByTestId } = render(<Preview id={ props.id } showPreview={ props.showPreview } callback={ props.callback } />);

            // Exercise
            const preview = getByTestId(props.id);
            userEvent.click(preview);

            // Verify
            expect(newShowPreview).toBe(expected);
        });
    });
});