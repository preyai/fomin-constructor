import { Meta, StoryObj } from '@storybook/react';
import DoctorBox from './DoctorBox';

const meta = {
  title: 'DoctorBox',
  component: DoctorBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DoctorBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
