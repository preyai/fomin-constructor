import { Meta, StoryObj } from '@storybook/react';
import RadioBox from './RadioBox';

const meta = {
  title: 'RadioBox',
  component: RadioBox,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof RadioBox>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  },
};
