import { Meta, StoryObj } from '@storybook/react';
import Main from './Main';

const meta = {
  title: 'Main',
  component: Main,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Main>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
