import {blueGrey, red} from '@mui/material/colors';
import {createTheme} from '@mui/material/styles';

const darkTheme = createTheme({
	palette: {
		mode: 'dark',
		primary: {
			main: blueGrey[500],
		},
		secondary: {
			main: '#EE5351',
		},
		background: {
			default: '#121212',
			paper: '#121212',
		},
		text: {
			primary: '#FFF',
		},
		error: {
			main: red.A400,
		},
	},
});

export default darkTheme;
