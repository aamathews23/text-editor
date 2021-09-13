import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { Footer, FooterProps } from './Footer';

export default {
    component: Footer,
    title: 'Features/Footer',
} as Meta;

const Template: Story<FooterProps> = (args) => <Footer {...args} />;

export const Default = Template.bind({});
Default.args = {
    "id": "default",
};
