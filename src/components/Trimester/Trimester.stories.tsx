import { Meta, StoryObj } from '@storybook/react';
import Trimester from './Trimester';

const meta = {
  title: 'Trimester',
  component: Trimester,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Trimester>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
