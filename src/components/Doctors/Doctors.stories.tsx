import { Meta, StoryObj } from '@storybook/react';
import Doctors from './Doctors';

const meta = {
  title: 'Doctors',
  component: Doctors,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Doctors>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
