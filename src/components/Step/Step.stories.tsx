import { Meta, StoryObj } from '@storybook/react';
import Step from './Step';
import { StepType } from '../../types';

const meta = {
  title: 'Step',
  component: Step,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Step>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    step: {} as StepType
  },
};
