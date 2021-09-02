import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { Button, ButtonProps } from './Button';

export default {
  component: Button,
  title: 'Components/Button',
} as Meta;

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
    "label": "Click Me!",
};

export const Outline = Template.bind({});
Outline.args = {
    "id": "outline",
    "label": "Click Me!",
    "outline": true,
};

export const WithCallback = Template.bind({});
WithCallback.args = {
    "id": "with-callback",
    "label": "click me!",
    "callback": () => console.log("clicked!"),
};
