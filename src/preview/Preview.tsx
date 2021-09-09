import React from "react";
import styled from "styled-components";

// Import Image
import PreviewIcon from "../icons/preview.png";

const Icon = styled.img`
    padding: 1px;
    margin-right: 10px;
    &:hover {
        border-radius: 5px;
        background-color: #D0D0D3;
        cursor: pointer;
    }
`;

export interface PreviewProps {
    id: string;
    showPreview?: boolean;
    callback?: (showPreview: boolean) => void;
}

export const Preview = (props: PreviewProps) => {
    return (
        <Icon
            id={ props.id }
            data-testid={ props.id }
            src={ PreviewIcon }
            alt="Preview"
            onClick={ () => props.callback ? props.callback(props.showPreview || false) : null }
        />
    );
};
