import React from "react";
import {
    Button as MuiButton,
    ButtonProps as MuiButtonProps,
} from "@mui/material";

// Only include variant, size, color from MuiButtonProps
type ButtonBaseProps = Pick<MuiButtonProps, "variant" | "size" | "color">;

// Include everything from MuiButtonProps except disableRipple
// type ButtonBaseProps = Omit<MuiButtonProps, "disableRipple">;

export interface ButtonProps extends ButtonBaseProps {
    variant?: 'text' | 'outlined' | 'contained'
    color?:
    | 'inherit'
    | 'primary'
    | 'secondary'
    | 'success'
    | 'error'
    | 'info'
    | 'warning'
    fullWidth?: boolean
    disabled?: boolean
    disabledElevation?: boolean
    disableFocusRipple?: boolean
    href?: string
}

export const Button = ({
    variant = 'outlined',
    children = 'Button',
    ...props
  }: ButtonProps) => {
    return (
        <MuiButton variant={variant} {...props}>
        {children}
      </MuiButton>
    );
  };