import CloudIcon from '@mui/icons-material/Cloud';
import PollIcon from '@mui/icons-material/Poll';
import StorageIcon from '@mui/icons-material/Storage';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Tab from '@mui/material/Tab';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import {type SyntheticEvent, useState} from 'react';

const SettingsTabsPanel = () => {
	const [value, setValue] = useState<string>('1');

	const handleChange = (event: SyntheticEvent, newValue: string) => {
		setValue(newValue);
	};

	return (
		<TabContext value={value}>
			<TabList variant='fullWidth' onChange={handleChange} aria-label='settings-tabs'>
				<Tooltip title='Identify your cluster' placement='top' arrow>
					<Tab icon={<CloudIcon />} value='1' label='Environment' />
				</Tooltip>
				<Tooltip title='Cnnect Meshery Adapters' placement='top' arrow>
					<Tab value='2' label='Adapters' />
				</Tooltip>
				<Tooltip title='Confiure Metrics backends' placement='top' arrow>
					<Tab icon={<PollIcon />} value='3' label='Metrics' />
				</Tooltip>
				<Tooltip title='Reset System' placement='top' arrow>
					<Tab icon={<StorageIcon />} value='4' label='Reset' />
				</Tooltip>
				<Tooltip title='MeshModel Summary' placement='top' arrow>
					<Tab value='5' label='MeshModel Summary' />
				</Tooltip>
			</TabList>
			<TabPanel value='1'>
				<Typography>
					Cake apple pie chupa chups biscuit liquorice tootsie roll liquorice sugar plum. Cotton candy wafer wafer jelly
					cake caramels brownie gummies.
				</Typography>
			</TabPanel>
			<TabPanel value='2'>
				<Typography>
					Chocolate bar carrot cake candy canes sesame snaps. Cupcake pie gummi bears jujubes candy canes. Chupa chups
					sesame snaps halvah.
				</Typography>
			</TabPanel>
			<TabPanel value='3'>
				<Typography>
					Danish tiramisu jujubes cupcake chocolate bar cake cheesecake chupa chups. Macaroon ice cream tootsie roll
					carrot cake gummi bears.
				</Typography>
			</TabPanel>
		</TabContext>
	);
};

export default function MesherySettings() {
	return <SettingsTabsPanel />;
}
