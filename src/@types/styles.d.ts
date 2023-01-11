import "styled-components";

declare module "styled-components" {
  type ThemeType = typeof light;
  export interface DefaultTheme extends ThemeType {}
}

declare module "styled-components" {
  type ThemeType = typeof dark;
  export interface DefaultTheme extends ThemeType {}
}
