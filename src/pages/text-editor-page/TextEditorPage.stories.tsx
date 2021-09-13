import React from 'react';
import { Story, Meta } from '@storybook/react';

// Import Component
import { TextEditorPage } from './TextEditorPage';

export default {
    component: TextEditorPage,
    title: 'Pages/TextEditorPage',
} as Meta;

const Template: Story = (args) => <TextEditorPage {...args} />;

export const Default = Template.bind({});
