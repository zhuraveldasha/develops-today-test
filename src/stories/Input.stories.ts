import type { Meta, StoryObj } from '@storybook/react-vite';
import { Input } from '../components/Input/Input';

const meta = {
  title: 'Example/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Password: Story = {
  args: {
    type: 'password',
    name: 'user_password'
  },
};

export const PasswordWithClear: Story = {
  args: {
    type: 'password',
    name: 'user_password',
    clearable: true,
  },
};

export const Text: Story = {
  args: {
    type: 'text',
    name: 'user_name',
  },
};

export const TextWithClear: Story = {
  args: {
    type: 'text',
    name: 'user_name',
    clearable: true,
  },
};

export const TextWithClearAndValue: Story = {
  args: {
    type: 'text',
    name: 'user_name',
    clearable: true,
    value: 'Vasyly',
  },
};

export const Number: Story = {
  args: {
    type: 'number',
    name: 'user_age',
  },
};

export const NumberWithClear: Story = {
  args: {
    type: 'number',
    name: 'user_age',
    clearable: true,
  },
};

export const NumberWithClearAndValue: Story = {
  args: {
    type: 'number',
    name: 'user_age',
    clearable: true,
    value: '33',
  },
};