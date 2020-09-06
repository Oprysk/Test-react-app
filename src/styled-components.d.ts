import "styled-components";

declare module "styled-components" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface, @typescript-eslint/interface-name-prefix
  export interface DefaultTheme extends ITheme {}
}
