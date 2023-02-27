import { createTheme } from '@mui/material/styles';
import { blueGrey, red } from '@mui/material/colors';

const lightTheme = createTheme({
    palette: {
        mode: "light",
        primary: {
            main: blueGrey[500],
        },
        secondary: {
            main: "#EE5351",
        },
        error: {
            main: red.A400,
        },
    },
});

export default lightTheme;