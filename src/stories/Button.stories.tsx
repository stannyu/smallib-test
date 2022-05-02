import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { Button } from 'Root/lib';

export default {
  title: 'DPG Media/Button',
  component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: 'Default one',
};

export const Altered = Template.bind({});
Altered.args = {
  label: 'Altered one',
};
