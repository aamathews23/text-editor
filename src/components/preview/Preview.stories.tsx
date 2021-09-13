import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { Preview, PreviewProps } from './Preview';

export default {
  component: Preview,
  title: 'Components/Preview',
} as Meta;

const Template: Story<PreviewProps> = (args) => <Preview {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
};

export const WithNoShowPreviewAndCallback = Template.bind({});
WithNoShowPreviewAndCallback.args = {
    "id": "with-no-show-preview-and-callback",
    "showPreview": false,
    "callback": (showPreview) => console.log(!showPreview),
};

export const WithShowPreviewAndCallback = Template.bind({});
WithShowPreviewAndCallback.args = {
    "id": "with-show-preview-and-callback",
    "showPreview": true,
    "callback": (showPreview) => console.log(!showPreview),
};
