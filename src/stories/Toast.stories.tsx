import type { Meta, StoryObj } from '@storybook/react-vite';
import { Toast } from '../components/Toast/Toast';

const meta = {
  title: 'Example/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {},
  args: {},
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ToastInfo: Story = {
  args: {
    type: 'info',
    text: 'info',
  },
};

export const ToastInfoCloseButton: Story = {
  args: {
    type: 'info',
    text: 'info',
    closeButton: true,
  },
};

export const ToastInfoTransition: Story = {
  args: {
    type: 'info',
    text: 'info',
    closeButton: true,
    transition: true,
  },
};

export const ToastInfoDuration: Story = {
  args: {
    type: 'info',
    text: 'info',
    closeButton: true,
    transition: true,
    duration: 3000,
  },
};

export const ToastWarning: Story = {
  args: {
    type: 'warning',
    text: 'warning',
  },
};

export const ToastWarningCloseButton: Story = {
  args: {
    type: 'warning',
    text: 'warning',
    closeButton: true,
  },
};

export const ToastWarningTransition: Story = {
  args: {
    type: 'warning',
    text: 'warning',
    closeButton: true,
    transition: true,
  },
};

export const ToastWarningDuration: Story = {
  args: {
    type: 'warning',
    text: 'warning',
    closeButton: true,
    transition: true,
    duration: 3000,
  },
};

export const ToastSuccess: Story = {
  args: {
    type: 'success',
    text: 'success',
  },
};

export const ToastSuccessCloseButton: Story = {
  args: {
    type: 'success',
    text: 'success',
    closeButton: true,
  },
};

export const ToastSuccessTransition: Story = {
  args: {
    type: 'success',
    text: 'success',
    closeButton: true,
    transition: true,
  },
};

export const ToastSuccessDuration: Story = {
  args: {
    type: 'success',
    text: 'success',
    closeButton: true,
    transition: true,
    duration: 3000,
  },
};