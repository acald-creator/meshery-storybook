import Drawer from '@mui/material/Drawer';

import {type NavLayoutProps} from './types';

export default function NavLayout({children}: NavLayoutProps) {
	return <Drawer variant='permanent'>{children}</Drawer>;
}
