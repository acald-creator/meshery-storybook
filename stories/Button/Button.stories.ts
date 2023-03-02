import type {Meta, StoryFn, StoryObj} from '@storybook/react';

// import { Button } from './Button';
import {Button} from '../../components/ui/Button/Button.component';

const meta: Meta<typeof Button> = {
	title: 'Component/Button',
	component: Button,
	tags: ['autodocs'],
};

export default meta;
type Story = StoryObj<typeof Button>;

export const PrimaryContained: Story = {
	args: {
		color: 'primary',
		variant: 'contained',
	},
};

export const SecondaryContained: Story = {
	args: {
		color: 'secondary',
		variant: 'contained',
	},
};

export const SmallNoOutlined: Story = {
	args: {
		size: 'small',
		variant: 'text',
	},
};

export const MediumOutlined: Story = {
	args: {
		size: 'medium',
		variant: 'outlined',
	},
};

export const LargeSuccessContained: Story = {
	args: {
		size: 'large',
		variant: 'contained',
		color: 'success',
	},
};
