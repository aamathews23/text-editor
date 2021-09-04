import React from "react";
import "./Bold.css";

import BoldIcon from "../icons/format_bold.png";

export interface BoldProps {
    "id": string;
}

export const Bold = (props: BoldProps) => {
    return (
        <div
            id={ props.id }
            data-testid={ props.id }
        >
            <img src={ BoldIcon } alt="Bold" />
        </div>
    );
};
