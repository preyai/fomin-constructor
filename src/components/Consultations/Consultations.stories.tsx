import { Meta, StoryObj } from '@storybook/react';
import Consultations from './Consultations';

const meta = {
  title: 'Consultations',
  component: Consultations,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Consultations>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
