import {styled} from '@mui/material/styles';

import {type LayoutProps} from './types';

const VerticalLayoutWrapper = styled('div')({
	height: '100%',
	display: 'flex',
});

const VerticalLayout = (props: LayoutProps) => {
	const {hidden} = props;

	return (
		<>
			<VerticalLayoutWrapper className='layout-wrapper'>
            Navigation
			</VerticalLayoutWrapper>
		</>
	);
};

export default VerticalLayout;
