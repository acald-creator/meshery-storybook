import { SxProps, Theme } from '@mui/material';
import { Box as MuiBox } from '@mui/material';

export type BoxProps = {
    sx?: SxProps<Theme>
}

export const Box = ({
    children = 'Box'
}) => (
    <MuiBox>
        {children}
    </MuiBox>
)