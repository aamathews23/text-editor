import React from "react";
import "./Button.css"

export interface ButtonProps {
    id: string;
    label: string;
    outline?: boolean;
    callback?: () => void;
}

export const Button = (props: ButtonProps) => {
    return (
        <button
            id={ props.id }
            data-testid={ props.id }
            className={ `button${ props.outline ? " outline" : "" }` }
            onClick={ props.callback }
        >
            { props.label.toUpperCase() }
        </button>
    );
};
