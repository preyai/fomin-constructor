import { Meta, StoryObj } from '@storybook/react';
import Visits from './Visits';

const meta = {
  title: 'Visits',
  component: Visits,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Visits>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
