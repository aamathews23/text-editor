import React from "react";

export interface ButtonProps {
    id: string;
    label: string;
}

const style: React.CSSProperties = {
    backgroundColor: "white",
    border: "1px solid gray",
    borderRadius: "1rem",
    padding: "0.5rem 1rem",
    color: "gray",
};

export const Button = (props: ButtonProps) => {
    return (
        <button
            id={ props.id }
            data-testid={ props.id }
            style={ style }
        >
            { props.label.toUpperCase() }
        </button>
    );
};
