import React, { useState } from "react";
import "./Input.css";

export interface InputProps {
    id: string;
    label: string;
}

export const Input = (props: InputProps) => {
    const [focused, setFocused] = useState(false);

    return (
        <div
            id={ props.id }
            className={ `input${focused ? " focused" : ""}` }
        >
            <label
                id={ `lbl-${props.id}` }
                htmlFor={ `inp-${props.id}` }
                className="input-label"
            >
                { props.label.toUpperCase() }
            </label>

            <input
                id={ `inp-${props.id}` }
                name={ `inp-${props.id}` }
                className="input-text"
                onFocus={ () => setFocused(true) }
                onBlur={ () => setFocused(false) }
            />
        </div>
    );
};
