import { Meta, StoryObj } from '@storybook/react';
import Cities from './Cities';

const meta = {
  title: 'Cities',
  component: Cities,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Cities>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
