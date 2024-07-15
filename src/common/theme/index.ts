import { createTheme } from '@mui/material/styles'
import palette from './palette'
import typography from './typography'

declare module '@mui/material/styles' {
  interface PaletteColor {
    darker?: string
    lightest?: string
    disabled?: string
    active?: string
  }

  interface SimplePaletteColorOptions {
    darker?: string
    lightest?: string
    disabled?: string
    active?: string
  }

  interface TypeText {
    helper?: string
    lightest?: string
    hyperlink?: string
  }

  interface TypeBackground {
    canvas?: string
    input?: string
    disabled?: string
    disabledDark?: string
    darkest?: string
  }

  interface Palette {
    border: Palette['primary']
  }

  interface PaletteOptions {
    border?: PaletteOptions['primary']
  }
}

const theme = createTheme({
  palette,
  typography,
})

export default theme
