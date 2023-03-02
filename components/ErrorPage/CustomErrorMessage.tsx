import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import {useEffect, useState} from 'react';

const customMessages = [
	'Oh, no. Please pardon our meshy app.',
	'Oops. Please excuse the mesh.',
	'Things tend to get a bit meshy around here.',
	'Please pardon our mesh.',
	'How did this mesh happen?',
	'Well, isn\'t this a mesh?',
	'Yikes. Things are a mesh here.',
];

export default function CustomErrorMessage() {
	const [customMessage, setCustomMessage] = useState(customMessages[0]);

	useEffect(() => {
		setCustomMessage(customMessages[Math.floor(Math.random() * customMessages.length)]);
	}, []);

	return (
		<Box>
			<Typography variant='h1'>{customMessage}</Typography>
			<Typography variant='h5'>Page does not exist</Typography>
			<Typography variant='body1'>
				<p>
					Start a conversation at Layer5 community{' '}
					<Link href='https://discuss.layer5.io/c/meshery/5' target='_blank'>
						discussion forum
					</Link>
					.
				</p>
			</Typography>
		</Box>
	);
}
