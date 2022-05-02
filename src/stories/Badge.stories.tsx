import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Badge } from 'Root/lib';

export default {
  title: 'DPG Media/Badge',
  component: Badge,
} as ComponentMeta<typeof Badge>;

const Template: ComponentStory<typeof Badge> = (args) => <Badge {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 1,
};

export const Altered = Template.bind({});
Altered.args = {
  value: 42,
};
