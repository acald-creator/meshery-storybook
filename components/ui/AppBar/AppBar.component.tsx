import {
	type AppBarClasses,
	type AppBarPropsColorOverrides,
	AppBar as MuiAppBar,
	type PropTypes,
	type SxProps,
	type Theme,
} from '@mui/material';
import {type OverridableStringUnion} from '@mui/types';
import React from 'react';

export type AppBarProps = {
	classes?: Partial<AppBarClasses>;
	color?: OverridableStringUnion<PropTypes.Color | 'transparent', AppBarPropsColorOverrides>;
	enableColoOnDark?: boolean;
	position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative';
	sx?: SxProps<Theme>;
	children?: string;
};

export const AppBar = ({position = 'static', children = 'AppBar', ...props}: AppBarProps) => (
	<MuiAppBar position={position} {...props}>
		{children}
	</MuiAppBar>
);
