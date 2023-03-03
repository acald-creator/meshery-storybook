import Box, {type BoxProps} from '@mui/material/Box';
import {styled} from '@mui/material/styles';

import {type BlankLayoutProps} from './types';

const BlankLayoutWrapper = styled(Box)<BoxProps>(({theme}) => ({
	height: '100vh',

	'& .content-center': {
		display: 'flex',
		minHeight: '100vh',
		alignItems: 'center',
		justifyContent: 'center',
		padding: theme.spacing(2),
	},
}));

const BlankLayout = ({children}: BlankLayoutProps) => (
	<BlankLayoutWrapper className='layout-wrapper'>
		<Box className='app-content' sx={{minHeight: '100vh', overflowX: 'hidden', position: 'relative'}}>
			{children}
		</Box>
	</BlankLayoutWrapper>
);

export default BlankLayout;
