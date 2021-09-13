import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { Header, HeaderProps } from './Header';

export default {
    component: Header,
    title: 'Features/Header',
} as Meta;

const Template: Story<HeaderProps> = (args) => <Header {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
};
