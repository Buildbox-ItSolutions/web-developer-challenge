import { PaletteColorOptions, Palette } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    black: Palette['primary']
    black2: Palette['primary']
    black3: Palette['primary']
    black4: Palette['primary']
    grey1: Palette['primary']
    grey2: Palette['primary']
    grey3: Palette['primary']
  }
  interface PaletteOptions {
    white?: PaletteColorOptions
    black?: PaletteOptions['primary']
    black2?: PaletteOptions['primary']
    black3?: PaletteOptions['primary']
    black4?: PaletteOptions['primary']
    grey1?: PaletteOptions['primary']
    grey2?: PaletteOptions['primary']
    grey3?: PaletteOptions['primary']
  }
}

declare module '@mui/material/' {
  //Aqui declaramos quais componentes terão as variações de cores customizadas disponíveis.
  //export interface NomeComponentePropsColorOverrides { nomedacor:true|false}
  export interface ButtonPropsColorOverrides {
    grey2: true


  }
  interface TypographyPropsColorOverrides {
    grey3: true


  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsColorOverrides {
    grey3: true


  }
}