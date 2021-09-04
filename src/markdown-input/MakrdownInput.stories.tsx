import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { MarkdownInput, MarkdownInputProps } from './MarkdownInput';

export default {
    component: MarkdownInput,
    title: 'Components/MarkdownInput',
} as Meta;

const Template: Story<MarkdownInputProps> = (args) => <MarkdownInput {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
    "label": "First Name",
};
