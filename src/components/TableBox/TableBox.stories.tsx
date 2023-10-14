import { Meta, StoryObj } from '@storybook/react';
import TableBox from './TableBox';

const meta = {
  title: 'TableBox',
  component: TableBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof TableBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
