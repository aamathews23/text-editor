import React from "react";
import "./Input.css";

export interface InputProps {
    id: string;
    label: string;
}

export const Input = (props: InputProps) => {
    return (
        <div id={ props.id }>
            <label
                id={ `lbl-${props.id}` }
                htmlFor={ `inp-${props.id}` }
            >
                { props.label }
            </label>

            <input
                id={ `inp-${props.id}` }
                name={ `inp-${props.id}` }
            />
        </div>
    );
};
