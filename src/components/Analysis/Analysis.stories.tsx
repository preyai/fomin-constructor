import { Meta, StoryObj } from '@storybook/react';
import Analysis from './Analysis';

const meta = {
  title: 'Analysis',
  component: Analysis,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Analysis>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
