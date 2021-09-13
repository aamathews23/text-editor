import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { Bold, BoldProps } from './Bold';

export default {
  component: Bold,
  title: 'Components/Bold',
} as Meta;

const Template: Story<BoldProps> = (args) => <Bold {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
};

export const WithUnboldedTextAndCallback = Template.bind({});
WithUnboldedTextAndCallback.args = {
    "id": "with-unbolded-text-and-callback",
    "text": "I am bold.",
    "callback": (text) => console.log(text),
};

export const WithBoldedTextAndCallback = Template.bind({});
WithBoldedTextAndCallback.args = {
    "id": "with-bolded-text-and-callback",
    "text": "**I am bold.**",
    "callback": (text) => console.log(text),
};
