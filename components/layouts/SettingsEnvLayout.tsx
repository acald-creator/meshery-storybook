import Box from '@mui/material/Box';

import {type SettingsLayoutProps} from './types';
import MesherySettingsEnvButton from '../ui/SettingsEnvButton';

export default function SettingsLayout({children}: SettingsLayoutProps) {
	return (
		<>
			<Box>
				<MesherySettingsEnvButton />
			</Box>
			{children}
		</>
	);
}