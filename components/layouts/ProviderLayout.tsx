import Paper from '@mui/material/Paper';
import React from 'react';

import {type ProviderLayoutProps} from './types';

export default function ProviderLayout({children}: ProviderLayoutProps) {
	return (
		<>
			<Paper sx={{padding: '170px 0px', minWidth: '90%', textAlign : 'center'}}>
				{children}
			</Paper>
		</>
	);
}
