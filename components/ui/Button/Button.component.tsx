import {Button as MuiButton, type ButtonProps as MuiButtonProps} from '@mui/material';
import React from 'react';

// Only include variant, size, color from MuiButtonProps
type ButtonBaseProps = Pick<MuiButtonProps, 'variant' | 'size' | 'color'>;

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export type ButtonProps = {
	variant?: 'text' | 'outlined' | 'contained';
	color?: 'inherit' | 'primary' | 'secondary' | 'success' | 'error' | 'info' | 'warning';
	fullWidth?: boolean;
	disabled?: boolean;
	disabledElevation?: boolean;
	disableFocusRipple?: boolean;
	href?: string;
	children?: string;
} & ButtonBaseProps;

export const Button = ({variant = 'outlined', children = 'Button', ...props}: ButtonProps) => (
	<MuiButton variant={variant} {...props}>
		{children}
	</MuiButton>
);
