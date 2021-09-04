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
