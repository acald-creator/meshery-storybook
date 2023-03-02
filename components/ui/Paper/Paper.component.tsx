import {
	Paper as MuiPaper,
	type PaperClasses,
	type PaperPropsVariantOverrides,
	type SxProps,
	type Theme,
} from '@mui/material';
import {type OverridableStringUnion} from '@mui/types';
import React from 'react';

type PaperProps = {
	children?: React.ReactNode;
	classes?: Partial<PaperClasses>;
	elevation?: number;
	square?: boolean;
	sx?: SxProps<Theme>;
	variant?: OverridableStringUnion<'elevation' | 'outlined', PaperPropsVariantOverrides>;
};

export const Paper = ({...rest}: PaperProps) => <MuiPaper {...rest}></MuiPaper>;

Paper.defaultProps = {};
