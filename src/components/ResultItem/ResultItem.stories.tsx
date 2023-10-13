import { Meta, StoryObj } from '@storybook/react';
import ResultItem, { ResultItemProps } from './ResultItem';

const meta = {
  title: 'ResultItem',
  component: ResultItem,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ResultItem>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    
  } as ResultItemProps,
};
