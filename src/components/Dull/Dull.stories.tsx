import { Meta, StoryObj } from '@storybook/react';
import Dull from './Dull';

const meta = {
  title: 'Dull',
  component: Dull,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Dull>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
