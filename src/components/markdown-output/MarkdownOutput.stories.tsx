import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { MarkdownOutput, MarkdownOutputProps } from './MarkdownOutput';

export default {
  component: MarkdownOutput,
  title: 'Components/MarkdownOutput',
} as Meta;

const Template: Story<MarkdownOutputProps> = (args) => <MarkdownOutput {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
};

export const WithText = Template.bind({});
WithText.args = {
    "id": "with-text",
    "text": "# Header 1"
};
