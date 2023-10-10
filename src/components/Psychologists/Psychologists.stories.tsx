import { Meta, StoryObj } from '@storybook/react';
import Psychologists from './Psychologists';

const meta = {
  title: 'Psychologists',
  component: Psychologists,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Psychologists>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
