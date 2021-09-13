import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { Italic, ItalicProps } from './Italic';

export default {
  component: Italic,
  title: 'Components/Italic',
} as Meta;

const Template: Story<ItalicProps> = (args) => <Italic {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
};

export const WithUnitalizedTextAndCallback = Template.bind({});
WithUnitalizedTextAndCallback.args = {
    "id": "with-unitilized-text-and-callback",
    "text": "I am italic.",
    "callback": (text) => console.log(text),
};

export const WithItalizedTextAndCallback = Template.bind({});
WithItalizedTextAndCallback.args = {
    "id": "with-itilized-text-and-callback",
    "text": "_I am italic._",
    "callback": (text) => console.log(text),
};
