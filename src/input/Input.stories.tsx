import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { Input, InputProps } from './Input';

export default {
    component: Input,
    title: 'Components/Input',
} as Meta;

const Template: Story<InputProps> = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
    "label": "First Name",
};
