import React from "react";
import styled from "styled-components";

// Import Image
import BoldIcon from "../icons/format_bold.png";

const IconWrapper = styled.div`
    display: inline-block;
    padding: 1px;
    margin-right: 10px;
    height: 24px;
    &:hover {
        border-radius: 5px;
        background-color: ${ props => props.theme.light ? "#D0D0D3" : "#161621" };
        cursor: pointer;
    }
`;

const Icon = styled.img`
    ${ props => props.theme.light ? "" : "filter: invert(1) sepia(0) saturate(1) hue-rotate(255deg);" }
`;

export interface BoldProps {
    id: string;
    text?: string;
    callback?: (text: string) => void;
}

export const Bold = (props: BoldProps) => {
    const handleOnClick = () => {
        let boldText = "";

        if (props.text) {
            if (props.text.startsWith("**") && props.text.endsWith("**")) {
                boldText = props.text.replace(/\*\*/g, "");
            } else {
                boldText = `**${props.text}**`;
            }
        }

        if (props.callback) {
            props.callback(boldText);
        }
    };

    return (
        <IconWrapper>
            <Icon
                id={ props.id }
                data-testid={ props.id }
                src={ BoldIcon }
                alt="Bold"
                onClick={ handleOnClick }
            />
        </IconWrapper>
        
    );
};
