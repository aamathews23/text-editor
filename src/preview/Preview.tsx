import React from "react";
import "./Preview.css";

import PreviewIcon from "../icons/preview.png";

export interface PreviewProps {
    id: string;
    showPreview?: boolean;
    callback?: (showPreview: boolean) => void;
}

export const Preview = (props: PreviewProps) => {
    return (
        <img
            id={ props.id }
            data-testid={ props.id }
            className="preview"
            src={ PreviewIcon }
            alt="Preview"
            onClick={ () => props.callback ? props.callback(props.showPreview || false) : null }
        />
    );
};
