import {Meta, StoryObj} from '@storybook/react';

import {Box} from '@/components/ui/Box/Box.component';

const meta: Meta<typeof Box> = {
	title: 'Component/Box',
	component: Box,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Box>;

export const Default: Story = {};
