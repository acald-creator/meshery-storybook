import AppBar from '@mui/material/AppBar';
import Box, {type BoxProps} from '@mui/material/Box';
import {styled} from '@mui/material/styles';
import Toolbar from '@mui/material/Toolbar';

import {type LayoutProps} from './types';

const HorizontalLayoutWrapper = styled('div')({
	height: '100%',
	display: 'flex',
});

const MainContentWrapper = styled(Box)<BoxProps>({
	flexGrow: 1,
	minWidth: 0,
	display: 'flex',
	minHeight: '100vh',
	flexDirection: 'column',
});

const HorizontalLayout = (props: LayoutProps) => {
	const {hidden, contentHeightFixed} = props;

	return (
		<HorizontalLayoutWrapper className='layout-wrapper'>
			<MainContentWrapper className='layout-content-wrapper' sx={{...(contentHeightFixed && {maxHeight: '100vh'})}}>
				<AppBar>
					<Box>
						<Toolbar>
                            Dashboard
						</Toolbar>
					</Box>
				</AppBar>
                
			</MainContentWrapper>
		</HorizontalLayoutWrapper>

	);
};

export default HorizontalLayout;
