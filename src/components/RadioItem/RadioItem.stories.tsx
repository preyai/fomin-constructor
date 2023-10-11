import { Meta, StoryObj } from '@storybook/react';
import RadioItem from './RadioItem';
import { RadioType } from '../../types';

const meta = {
  title: 'RadioItem',
  component: RadioItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: {} as RadioType
  },
};
