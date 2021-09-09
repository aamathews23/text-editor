import React from "react";
import styled from "styled-components";

// Import Image
import PreviewIcon from "../icons/preview.png";

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

export interface PreviewProps {
    id: string;
    showPreview?: boolean;
    callback?: (showPreview: boolean) => void;
}

export const Preview = (props: PreviewProps) => {
    return (
        <IconWrapper>
            <Icon
                id={ props.id }
                data-testid={ props.id }
                src={ PreviewIcon }
                alt="Preview"
                onClick={ () => props.callback ? props.callback(props.showPreview || false) : null }
            />
        </IconWrapper>
    );
};
