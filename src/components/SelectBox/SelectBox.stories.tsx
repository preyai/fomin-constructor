import { Meta, StoryObj } from '@storybook/react';
import SelectBox from './SelectBox';

const meta = {
  title: 'SelectBox',
  component: SelectBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
