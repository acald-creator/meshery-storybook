import React from "react"
import {
    Paper as MuiPaper, PaperClasses, PaperPropsVariantOverrides, SxProps, Theme
} from "@mui/material"
import { OverridableStringUnion } from "@mui/types"

interface PaperProps {
    children?: React.ReactNode
    classes?: Partial<PaperClasses>
    elevation?: number
    square?: boolean
    sx?: SxProps<Theme>
    variant?: OverridableStringUnion<'elevation' | 'outlined', PaperPropsVariantOverrides>
}

export const Paper = ({ props, ...rest }: PaperProps) => (
    <MuiPaper {...props} {...rest}></MuiPaper>
);

Paper.defaultProps = {}