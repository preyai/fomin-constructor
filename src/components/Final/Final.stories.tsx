import { Meta, StoryObj } from '@storybook/react';
import Final from './Final';

const meta = {
  title: 'Final',
  component: Final,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Final>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
