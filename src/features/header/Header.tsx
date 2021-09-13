import React from "react";

export interface HeaderProps {
    id: string;
}

export const Header = (props: HeaderProps) => {
    return (
        <div id={ props.id }>
            Markdown App
        </div>
    );
};
