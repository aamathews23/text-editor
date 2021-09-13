import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { TextEditor, TextEditorProps } from './TextEditor';

export default {
  component: TextEditor,
  title: 'Features/TextEditor',
} as Meta;

const Template: Story<TextEditorProps> = (args) => <TextEditor {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
};

export const DarkMode = Template.bind({});
DarkMode.args = {
    "id": "dark-mode",
    "dark": true,
};
