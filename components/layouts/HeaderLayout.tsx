import Box from '@mui/material/Box';

import {type HeaderLayoutProps} from './types';


export default function HeaderLayout({children}: HeaderLayoutProps) {
	return (
		<>
			<Box>
				{children}     
			</Box>
   
		</>
	);
}