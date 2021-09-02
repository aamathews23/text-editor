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
    "label": "Click Me!"
};
