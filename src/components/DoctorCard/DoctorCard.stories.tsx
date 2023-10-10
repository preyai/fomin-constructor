import { Meta, StoryObj } from '@storybook/react';
import DoctorCard from './DoctorCard';

const meta = {
  title: 'DoctorCard',
  component: DoctorCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DoctorCard>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
