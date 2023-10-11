import { Meta, StoryObj } from '@storybook/react';
import SelectItem, { SelectItemProps } from './SelectItem';

const meta = {
  title: 'SelectItem',
  component: SelectItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof SelectItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {

  } as SelectItemProps,
};
