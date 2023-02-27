import React from "react";
import {
    AppBar as MuiAppBar,
    AppBarClasses,
    AppBarPropsColorOverrides,
    PropTypes,
    SxProps,
    Theme
} from "@mui/material"
import { OverridableStringUnion } from "@mui/types";

export interface AppBarProps {
    classes?: Partial<AppBarClasses>
    color?: OverridableStringUnion<PropTypes.Color | 'transparent', AppBarPropsColorOverrides>
    enableColoOnDark?: boolean
    position?: 'fixed' | 'absolute' | 'sticky' | 'static' | 'relative'
    sx?: SxProps<Theme>
}

export const AppBar = ({ props, ...rest }: AppBarProps) => (
    <MuiAppBar {...props} {...rest} />
)

AppBar.defaultProps = {
    position: "fixed",
    color: "primary"
}