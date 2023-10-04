import { Meta, StoryObj } from '@storybook/react';
import Samo from './Samo';

const meta = {
  title: 'Samo',
  component: Samo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Samo>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
