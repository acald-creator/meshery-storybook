import { Meta, StoryObj } from '@storybook/react';

import { AppBar } from '../../components/ui/AppBar/AppBar.component';

const meta: Meta<typeof AppBar> = {
  title: 'Component/AppBar',
  component: AppBar,
  tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof AppBar>;

export const Primary: Story = {};
Primary.args = {
  position: 'fixed',
  color: 'primary',
};
