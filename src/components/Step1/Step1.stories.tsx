import { Meta, StoryObj } from '@storybook/react';
import Step1 from './Step1';

const meta = {
  title: 'Step1',
  component: Step1,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Step1>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
