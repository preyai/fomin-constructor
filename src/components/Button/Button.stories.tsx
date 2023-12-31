import { Meta, StoryObj } from '@storybook/react';
import Button, { ButtonProps } from './Button';

const meta = {
  title: 'Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: <>Кнопка</>
  } as ButtonProps,
};
