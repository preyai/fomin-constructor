import { Meta, StoryObj } from '@storybook/react';
import Ultrasound from './Ultrasound';

const meta = {
  title: 'Ultrasound',
  component: Ultrasound,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Ultrasound>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
