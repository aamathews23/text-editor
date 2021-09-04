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
};

export const WithPlaceholder = Template.bind({});
WithPlaceholder.args = {
    "id": "with-placeholder",
    "placeholder": "Enter Markdown Here...",
}

export const WithValue = Template.bind({});
WithValue.args = {
    "id": "with-value",
    "value": "# Header 1",
}

export const WithCallback = Template.bind({});
WithCallback.args = {
    "id": "with-placeholder",
    "callback": (input) => console.log(input),
}
