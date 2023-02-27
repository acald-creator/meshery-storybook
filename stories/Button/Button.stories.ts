import type { Meta, StoryFn, StoryObj } from '@storybook/react';

// import { Button } from './Button';
import { Button } from '../../components/ui/Button/button.component';

const meta: Meta<typeof Button> = {
  title: 'Component/Button',
  component: Button,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const Primary: Story = {
  args: {
    color: 'primary',
    variant: "contained",
  },
};

export const Secondary: Story = {
  args: {
    color: 'secondary',
    variant: "contained",
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    variant: "text"
  },
};

export const Medium: Story = {
  args: {
    size: 'medium',
    variant: "outlined"
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    variant: "contained",
    color: "success"
  },
};


