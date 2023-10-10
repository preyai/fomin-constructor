import { Meta, StoryObj } from '@storybook/react';
import Nipt from './Nipt';

const meta = {
  title: 'Nipt',
  component: Nipt,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Nipt>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
